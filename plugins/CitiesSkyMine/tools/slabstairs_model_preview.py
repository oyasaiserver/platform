#!/usr/bin/env python3
"""Side-view helper for SlabStairs shape tuning.

This script mirrors the command's geometric choice logic without touching a
world. It is intentionally small so sample schematics and candidate dimensions
can be compared from the terminal while tuning the Kotlin implementation.
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass
from math import floor
from pathlib import Path
from typing import Iterable

try:
    import nbtlib
except ImportError:  # pragma: no cover - helper script
    nbtlib = None


SAMPLE_OFFSETS = (
    (0.5, 0.5),
    (0.2, 0.2),
    (0.8, 0.2),
    (0.2, 0.8),
    (0.8, 0.8),
)
DEFAULT_STAIR_SCORE_PENALTY = 0.08
SMOOTH_STAIR_SCORE_PENALTY = -0.02
CONSECUTIVE_STAIR_SCORE_PENALTY = 0.5
MAX_CANDIDATES_PER_COLUMN = 8


@dataclass(frozen=True)
class Column:
    kind: str
    y: int
    support: tuple[int, ...] = ()


@dataclass(frozen=True)
class PlannedColumn:
    progress: float
    candidates: tuple[tuple[float, Column], ...]


def endpoint_surface_half(y: int, direction_to_other: int, mode: str) -> float:
    if mode == "down":
        return y * 2.0 + 1.0
    if mode == "up":
        return y * 2.0 + 2.0
    return y * 2.0 + (2.0 if direction_to_other < 0 else 1.0)


def surface_half(y: int, kind: str, local: float, dy: int) -> float:
    if kind == "b":
        return y * 2.0 + 1.0
    if kind == "t":
        return y * 2.0 + 2.0
    if dy >= 0:
        return y * 2.0 + (1.0 if local < 0.5 else 2.0)
    return y * 2.0 + (2.0 if local < 0.5 else 1.0)


def model_columns(steps: int, dy: int, mode: str, smoothing: bool) -> list[Column]:
    if steps <= 0:
        raise ValueError("steps must be positive")
    start = endpoint_surface_half(0, dy, mode)
    end = endpoint_surface_half(dy, -dy, mode)
    stair_penalty = SMOOTH_STAIR_SCORE_PENALTY if smoothing else DEFAULT_STAIR_SCORE_PENALTY
    planned: list[PlannedColumn] = []
    for index in range(steps + 1):
        samples: list[tuple[float, float]] = []
        for _offset_x, offset_z in SAMPLE_OFFSETS:
            raw = index + offset_z - 0.5
            progress = min(max(raw, 0.0), float(steps))
            local = raw + 0.5
            local -= floor(local)
            line_progress = progress / steps
            samples.append((local, start + (end - start) * line_progress))

        min_y = int(floor(min(half for _local, half in samples) / 2.0)) - 1
        max_y = int(floor(max(half for _local, half in samples) / 2.0)) + 1
        candidates: list[tuple[float, Column]] = []
        for y in range(min_y, max_y + 1):
            for kind in ("b", "t", "S"):
                score = sum(
                    (half - surface_half(y, kind, local, dy)) ** 2 for local, half in samples
                )
                if kind == "S":
                    score += stair_penalty
                candidates.append((score, Column(kind, y)))
        planned.append(
            PlannedColumn(
                float(index),
                tuple(sorted(candidates, key=lambda candidate: candidate[0])[:MAX_CANDIDATES_PER_COLUMN]),
            )
        )

    avoid_consecutive_stairs = abs(end - start) < steps * 2.0
    columns = resolve_columns(planned, avoid_consecutive_stairs)

    supports_by_index: dict[int, list[int]] = {}
    ordered_indexes = sorted(range(len(planned)), key=lambda i: planned[i].progress)
    for previous_index, current_index in zip(ordered_indexes, ordered_indexes[1:]):
        previous = columns[previous_index]
        current = columns[current_index]
        if previous.y <= current.y:
            lower = previous
            higher = current
            higher_index = current_index
        else:
            lower = current
            higher = previous
            higher_index = previous_index
        for support_y in range(lower.y + 1, higher.y):
            supports_by_index.setdefault(higher_index, []).append(support_y)

    return [
        Column(column.kind, column.y, tuple(supports_by_index.get(index, ())))
        for index, column in enumerate(columns)
    ]


def resolve_columns(planned: list[PlannedColumn], avoid_consecutive_stairs: bool) -> list[Column]:
    if not planned:
        return []
    order = sorted(range(len(planned)), key=lambda i: planned[i].progress)
    backrefs: list[list[int]] = [[-1 for _score, _column in planned[order[0]].candidates]]
    previous_costs = [score for score, _column in planned[order[0]].candidates]
    for position in range(1, len(order)):
        previous_candidates = planned[order[position - 1]].candidates
        current_candidates = planned[order[position]].candidates
        current_costs: list[float] = []
        current_backrefs: list[int] = []
        for current_score, current_column in current_candidates:
            best_previous_index = 0
            best_previous_cost = float("inf")
            for previous_index, (_previous_score, previous_column) in enumerate(previous_candidates):
                transition = transition_penalty(
                    previous_column,
                    current_column,
                    avoid_consecutive_stairs,
                )
                cost = previous_costs[previous_index] + transition
                if cost < best_previous_cost:
                    best_previous_cost = cost
                    best_previous_index = previous_index
            current_costs.append(current_score + best_previous_cost)
            current_backrefs.append(best_previous_index)
        previous_costs = current_costs
        backrefs.append(current_backrefs)

    selected = [0 for _ in order]
    selected[-1] = min(range(len(previous_costs)), key=lambda i: previous_costs[i])
    for position in range(len(order) - 1, 0, -1):
        selected[position - 1] = backrefs[position][selected[position]]

    resolved: list[Column | None] = [None for _ in planned]
    for position, original_index in enumerate(order):
        resolved[original_index] = planned[original_index].candidates[selected[position]][1]
    return [column for column in resolved if column is not None]


def transition_penalty(previous: Column, current: Column, avoid_consecutive_stairs: bool) -> float:
    if avoid_consecutive_stairs and previous.kind == "S" and current.kind == "S":
        return CONSECUTIVE_STAIR_SCORE_PENALTY
    return 0.0


def render(columns: Iterable[Column]) -> str:
    cols = list(columns)
    occupied = [(column.y, column.kind, i) for i, column in enumerate(cols)]
    for i, column in enumerate(cols):
        occupied.extend((y, "F", i) for y in column.support)
    max_y = max((y for y, _kind, _i in occupied), default=0)
    min_y = min((y for y, _kind, _i in occupied), default=0)
    lines = []
    for y in range(max_y, min_y - 1, -1):
        chars = ["." for _ in cols]
        for yy, kind, i in occupied:
            if yy == y:
                chars[i] = kind
        lines.append(f"{y:02d} {''.join(chars)}")
    lines.append(
        "columns: "
        + " ".join(
            f"{i}:{column.kind}@{column.y}"
            + (f"+{','.join(map(str, column.support))}" if column.support else "")
            for i, column in enumerate(cols)
        )
    )
    return "\n".join(lines)


def schematic_columns(path: Path) -> list[Column]:
    if nbtlib is None:
        raise RuntimeError("nbtlib is required to read schematics")
    schem = nbtlib.load(path)
    if "Schematic" in schem:
        schem = schem["Schematic"]
    width = int(schem["Width"])
    height = int(schem["Height"])
    length = int(schem["Length"])
    blocks = schem.get("Blocks", schem)
    palette = {int(v): str(k) for k, v in blocks["Palette"].items()}
    data = list(blocks.get("BlockData", blocks.get("Data")))
    columns: list[Column] = []
    for z in range(length):
        found: list[Column] = []
        supports: list[int] = []
        for y in range(height):
            for x in range(width):
                block = palette[data[(y * length + z) * width + x]]
                if block.endswith("_slab[type=bottom,waterlogged=false]"):
                    found.append(Column("b", y))
                elif block.endswith("_slab[type=top,waterlogged=false]"):
                    found.append(Column("t", y))
                elif "_stairs[" in block:
                    found.append(Column("S", y))
                elif block != "minecraft:air":
                    supports.append(y)
        if found:
            top = max(found, key=lambda column: column.y)
            columns.append(Column(top.kind, top.y, tuple(y for y in supports if y != top.y)))
    return columns


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--steps", type=int, help="Horizontal step count. Output columns are steps + 1.")
    parser.add_argument("--dy", type=int, help="Vertical block delta.")
    parser.add_argument("--mode", choices=("corner", "down", "up"), default="corner")
    parser.add_argument("--smooth", action="store_true")
    parser.add_argument("--schem", type=Path, action="append", default=[])
    args = parser.parse_args()

    if args.steps is not None and args.dy is not None:
        print(render(model_columns(args.steps, args.dy, args.mode, args.smooth)))
    for path in args.schem:
        print(f"\n{path}:")
        print(render(schematic_columns(path)))


if __name__ == "__main__":
    main()
