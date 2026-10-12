#!/usr/bin/env python3
"""Merge PLATEAU CityGML tiles and export them as OBJ and ASCII FBX.

This exporter targets the geometry that is available in the selected tiles.
It prefers the highest LOD found per object and triangulates polygons so the
result can be loaded by common DCC tools without a GIS stack.
"""

from __future__ import annotations

import argparse
import math
import os
import re
import shutil
import sys
import tempfile
from collections import Counter
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Iterable, Iterator, Sequence

import mapbox_earcut
import numpy as np
from lxml import etree


NS = {
    "gml": "http://www.opengis.net/gml",
    "app": "http://www.opengis.net/citygml/appearance/2.0",
    "bldg": "http://www.opengis.net/citygml/building/2.0",
    "tran": "http://www.opengis.net/citygml/transportation/2.0",
    "brid": "http://www.opengis.net/citygml/bridge/2.0",
    "frn": "http://www.opengis.net/citygml/cityfurniture/2.0",
    "veg": "http://www.opengis.net/citygml/vegetation/2.0",
}
GML_ID = "{http://www.opengis.net/gml}id"
GEOM_TAG_RE = re.compile(r"^lod([123])(MultiSurface|Geometry|Solid)$")
ENVELOPE_LOWER_RE = re.compile(r"<gml:lowerCorner>([-0-9.]+) ([-0-9.]+)")
ENVELOPE_UPPER_RE = re.compile(r"<gml:upperCorner>([-0-9.]+) ([-0-9.]+)")

OBJECT_TAGS = {
    "bldg": tuple(f"{{{NS['bldg']}}}{name}" for name in ("Building",)),
    "tran": tuple(
        f"{{{NS['tran']}}}{name}"
        for name in ("Road", "Track", "Square", "Railway")
    ),
    "brid": tuple(f"{{{NS['brid']}}}{name}" for name in ("Bridge",)),
    "frn": tuple(f"{{{NS['frn']}}}{name}" for name in ("CityFurniture",)),
    "veg": tuple(
        f"{{{NS['veg']}}}{name}"
        for name in ("PlantCover", "SolitaryVegetationObject")
    ),
}


@dataclass(frozen=True)
class SourceFile:
    mesh: str
    layer: str
    path: Path


@dataclass(frozen=True)
class Origin:
    lat_deg: float
    lon_deg: float
    h: float
    x0: float
    y0: float
    z0: float
    sin_lat: float
    cos_lat: float
    sin_lon: float
    cos_lon: float


@dataclass
class ExportStats:
    objects: int = 0
    polygons: int = 0
    triangles: int = 0
    skipped_polygons: int = 0
    textured_polygons: int = 0
    lod_counts: Counter[int] | None = None
    layer_polygons: Counter[str] | None = None

    def __post_init__(self) -> None:
        if self.lod_counts is None:
            self.lod_counts = Counter()
        if self.layer_polygons is None:
            self.layer_polygons = Counter()


@dataclass(frozen=True)
class ParsedRing:
    ring_id: str | None
    points: tuple[tuple[float, float, float], ...]


@dataclass(frozen=True)
class ParsedPolygon:
    polygon_id: str | None
    rings: tuple[ParsedRing, ...]


@dataclass(frozen=True)
class TextureBinding:
    source_image_path: Path
    image_uri: str
    ring_uvs: dict[str, tuple[tuple[float, float], ...]]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--dataset-root",
        type=Path,
        required=True,
        help="PLATEAU dataset root directory such as .../26100_kyoto-shi_city_2023_citygml_1_op",
    )
    parser.add_argument(
        "--meshes",
        nargs="+",
        required=True,
        help="8-digit mesh codes to merge",
    )
    parser.add_argument(
        "--layers",
        nargs="+",
        default=["bldg", "tran", "brid"],
        choices=sorted(OBJECT_TAGS),
        help="UDX layers to export",
    )
    parser.add_argument(
        "--formats",
        nargs="+",
        default=["obj", "fbx"],
        choices=("obj", "fbx"),
        help="Mesh formats to write",
    )
    parser.add_argument(
        "--lod",
        type=int,
        choices=(1, 2, 3),
        default=None,
        help="Force a specific LOD instead of taking the highest LOD per object",
    )
    parser.add_argument(
        "--obj-textures",
        choices=("none", "reference", "copy"),
        default="none",
        help="Write OBJ texture data. 'reference' keeps source image paths, 'copy' copies used images next to the OBJ",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        required=True,
        help="Directory where exported files will be written",
    )
    parser.add_argument(
        "--output-name",
        default="plateau_merged",
        help="Base filename without extension",
    )
    parser.add_argument(
        "--limit-objects",
        type=int,
        default=0,
        help="Debug option. Stop after this many objects if non-zero",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if args.obj_textures != "none" and "obj" not in args.formats:
        print("--obj-textures requires obj in --formats", file=sys.stderr)
        return 1
    source_files = discover_source_files(args.dataset_root, args.meshes, args.layers)
    if not source_files:
        print("no source files found", file=sys.stderr)
        return 1

    args.output_dir.mkdir(parents=True, exist_ok=True)
    origin = build_origin(source_files)
    stats = ExportStats()

    writers = []
    if "obj" in args.formats:
        writers.append(
            ObjWriter(
                args.output_dir / f"{args.output_name}.obj",
                origin,
                source_files,
                texture_mode=args.obj_textures,
            )
        )
    if "fbx" in args.formats:
        writers.append(FbxWriter(args.output_dir / f"{args.output_name}.fbx", origin, source_files))

    try:
        export_meshes(
            source_files,
            origin,
            writers,
            stats,
            forced_lod=args.lod,
            use_obj_textures=args.obj_textures != "none",
            limit_objects=args.limit_objects,
        )
    finally:
        for writer in writers:
            writer.close()

    summary_path = args.output_dir / f"{args.output_name}_summary.txt"
    summary_path.write_text(render_summary(args, source_files, origin, stats), encoding="utf-8")
    print(render_summary(args, source_files, origin, stats))
    return 0


def discover_source_files(dataset_root: Path, meshes: Sequence[str], layers: Sequence[str]) -> list[SourceFile]:
    source_files: list[SourceFile] = []
    udx_root = dataset_root / "udx"
    for layer in layers:
        layer_dir = udx_root / layer
        for mesh in meshes:
            for path in sorted(layer_dir.glob(f"{mesh}_{layer}_*_op.gml")):
                source_files.append(SourceFile(mesh=mesh, layer=layer, path=path))
    return source_files


def build_origin(source_files: Sequence[SourceFile]) -> Origin:
    lat_min = lon_min = float("inf")
    lat_max = lon_max = float("-inf")
    for source in source_files:
        lower, upper = read_gml_envelope(source.path)
        lat_min = min(lat_min, lower[0])
        lon_min = min(lon_min, lower[1])
        lat_max = max(lat_max, upper[0])
        lon_max = max(lon_max, upper[1])
    lat = (lat_min + lat_max) / 2.0
    lon = (lon_min + lon_max) / 2.0
    h = 0.0
    x0, y0, z0 = geodetic_to_ecef(lat, lon, h)
    lat_rad = math.radians(lat)
    lon_rad = math.radians(lon)
    return Origin(
        lat_deg=lat,
        lon_deg=lon,
        h=h,
        x0=x0,
        y0=y0,
        z0=z0,
        sin_lat=math.sin(lat_rad),
        cos_lat=math.cos(lat_rad),
        sin_lon=math.sin(lon_rad),
        cos_lon=math.cos(lon_rad),
    )


def read_gml_envelope(path: Path) -> tuple[tuple[float, float], tuple[float, float]]:
    lower = upper = None
    with path.open("r", encoding="utf-8", errors="ignore") as handle:
        for line_number, line in enumerate(handle, start=1):
            if lower is None:
                match = ENVELOPE_LOWER_RE.search(line)
                if match:
                    lower = (float(match.group(1)), float(match.group(2)))
            if upper is None:
                match = ENVELOPE_UPPER_RE.search(line)
                if match:
                    upper = (float(match.group(1)), float(match.group(2)))
            if lower and upper:
                return lower, upper
            if line_number > 40:
                break
    raise RuntimeError(f"failed to read envelope from {path}")


def export_meshes(
    source_files: Sequence[SourceFile],
    origin: Origin,
    writers: Sequence["MeshWriter"],
    stats: ExportStats,
    *,
    forced_lod: int | None = None,
    use_obj_textures: bool = False,
    limit_objects: int = 0,
) -> None:
    object_count = 0
    texture_cache: dict[Path, dict[str, TextureBinding]] = {}
    for source in source_files:
        print(f"processing {source.layer} {source.mesh}: {source.path.name}", file=sys.stderr)
        texture_bindings = None
        if use_obj_textures:
            texture_bindings = texture_cache.setdefault(source.path, load_texture_bindings(source.path))
        for elem in iter_city_objects(source.path, source.layer):
            lod = forced_lod or detect_highest_lod(elem)
            polygons = collect_polygons(elem, lod)
            if not polygons:
                clear_element(elem)
                continue

            object_id = elem.get(GML_ID) or f"{source.layer}_{object_count}"
            wrote_object_header = False
            emitted_polygons = 0
            emitted_triangles = 0

            for polygon in polygons:
                parsed_polygon = parse_polygon(polygon, origin)
                if parsed_polygon is None:
                    stats.skipped_polygons += 1
                    continue
                texture_binding = None
                if texture_bindings is not None and parsed_polygon.polygon_id is not None:
                    texture_binding = texture_bindings.get(f"#{parsed_polygon.polygon_id}")

                vertices, triangles, uv_vertices = triangulate_polygon(parsed_polygon, texture_binding)
                if not vertices or triangles.size == 0:
                    stats.skipped_polygons += 1
                    continue
                if not wrote_object_header:
                    for writer in writers:
                        writer.start_object(source.layer, object_id)
                    wrote_object_header = True
                for writer in writers:
                    writer.add_polygon(
                        source.layer,
                        object_id,
                        vertices,
                        triangles,
                        uv_vertices=uv_vertices,
                        texture_path=texture_binding.source_image_path if texture_binding else None,
                    )
                emitted_polygons += 1
                emitted_triangles += int(triangles.size // 3)
                if texture_binding and uv_vertices is not None:
                    stats.textured_polygons += 1

            if wrote_object_header:
                stats.objects += 1
                stats.polygons += emitted_polygons
                stats.triangles += emitted_triangles
                stats.lod_counts[lod] += 1
                stats.layer_polygons[source.layer] += emitted_polygons
                object_count += 1
                if limit_objects and object_count >= limit_objects:
                    clear_element(elem)
                    return

            clear_element(elem)


def iter_city_objects(path: Path, layer: str) -> Iterator[etree._Element]:
    tags = OBJECT_TAGS[layer]
    context = etree.iterparse(
        str(path),
        events=("end",),
        tag=tags,
        recover=True,
        huge_tree=True,
    )
    for _, elem in context:
        yield elem


def detect_highest_lod(elem: etree._Element) -> int:
    highest = 0
    for child in elem.iter():
        match = GEOM_TAG_RE.match(local_name(child))
        if match:
            highest = max(highest, int(match.group(1)))
    return highest or 1


def collect_polygons(elem: etree._Element, lod: int) -> list[etree._Element]:
    candidate_geom_names = {f"lod{lod}MultiSurface", f"lod{lod}Geometry"}
    polygons: list[etree._Element] = []
    seen_ids: set[str] = set()

    for child in elem.iter():
        if local_name(child) not in candidate_geom_names:
            continue
        for polygon in child.findall(".//gml:Polygon", namespaces=NS):
            polygon_id = polygon.get(GML_ID) or str(id(polygon))
            if polygon_id in seen_ids:
                continue
            seen_ids.add(polygon_id)
            polygons.append(polygon)

    if polygons:
        return polygons

    for polygon in elem.findall(".//gml:Polygon", namespaces=NS):
        polygon_id = polygon.get(GML_ID) or str(id(polygon))
        if polygon_id in seen_ids:
            continue
        seen_ids.add(polygon_id)
        polygons.append(polygon)
    return polygons


def parse_polygon(polygon: etree._Element, origin: Origin) -> ParsedPolygon | None:
    rings: list[ParsedRing] = []
    exterior = polygon.find("gml:exterior/gml:LinearRing", namespaces=NS)
    if exterior is None:
        return None
    exterior_ring = parse_ring(exterior, origin)
    if exterior_ring is None:
        return None
    rings.append(exterior_ring)

    for interior in polygon.findall("gml:interior/gml:LinearRing", namespaces=NS):
        interior_ring = parse_ring(interior, origin)
        if interior_ring is not None:
            rings.append(interior_ring)
    if not rings:
        return None
    return ParsedPolygon(
        polygon_id=polygon.get(GML_ID),
        rings=tuple(rings),
    )


def parse_ring(ring: etree._Element, origin: Origin) -> ParsedRing | None:
    pos_list = ring.find("gml:posList", namespaces=NS)
    coords: list[float] = []
    if pos_list is not None and pos_list.text:
        coords = [float(value) for value in pos_list.text.split()]
    else:
        for pos in ring.findall("gml:pos", namespaces=NS):
            if pos.text:
                coords.extend(float(value) for value in pos.text.split())

    if not coords:
        return None

    if len(coords) % 3 == 0:
        stride = 3
    elif len(coords) % 2 == 0:
        stride = 2
    else:
        return None

    points: list[tuple[float, float, float]] = []
    for index in range(0, len(coords), stride):
        lat = coords[index]
        lon = coords[index + 1]
        height = coords[index + 2] if stride == 3 else 0.0
        east, north, up = geodetic_to_enu(lat, lon, height, origin)
        # OBJ/FBX consumers usually expect Y-up.
        points.append((east, up, north))

    cleaned = clean_point_loop(points)
    if len(cleaned) < 3:
        return None
    return ParsedRing(
        ring_id=ring.get(GML_ID),
        points=tuple(cleaned),
    )


def triangulate_rings(
    rings: Sequence[Sequence[tuple[float, float, float]]]
) -> tuple[list[tuple[float, float, float]], np.ndarray]:
    vertices_3d: list[tuple[float, float, float]] = []
    projected_2d: list[tuple[float, float]] = []
    ring_ends: list[int] = []

    drop_axis = choose_projection_axis(rings[0])
    for ring in rings:
        for point in ring:
            projected_2d.append(project_point(point, drop_axis))
            vertices_3d.append(point)
        ring_ends.append(len(vertices_3d))

    if len(vertices_3d) == 3 and len(rings) == 1:
        return vertices_3d, np.array([0, 1, 2], dtype=np.uint32)

    verts = np.array(projected_2d, dtype=np.float64)
    ends = np.array(ring_ends, dtype=np.uint32)
    triangles = mapbox_earcut.triangulate_float64(verts, ends)

    if triangles.size == 0 and len(rings) == 1:
        if len(vertices_3d) < 3:
            return [], np.array([], dtype=np.uint32)
        fan: list[int] = []
        for index in range(1, len(vertices_3d) - 1):
            fan.extend((0, index, index + 1))
        triangles = np.array(fan, dtype=np.uint32)

    return vertices_3d, triangles


def triangulate_polygon(
    polygon: ParsedPolygon,
    texture_binding: TextureBinding | None,
) -> tuple[list[tuple[float, float, float]], np.ndarray, list[tuple[float, float]] | None]:
    ring_points = [ring.points for ring in polygon.rings]
    vertices, triangles = triangulate_rings(ring_points)
    if not vertices or triangles.size == 0:
        return [], np.array([], dtype=np.uint32), None
    if texture_binding is None:
        return vertices, triangles, None

    uv_vertices = build_uv_vertices(polygon, texture_binding)
    if uv_vertices is None or len(uv_vertices) != len(vertices):
        return vertices, triangles, None
    return vertices, triangles, uv_vertices


def choose_projection_axis(points: Sequence[tuple[float, float, float]]) -> int:
    nx = ny = nz = 0.0
    point_count = len(points)
    for index in range(point_count):
        x1, y1, z1 = points[index]
        x2, y2, z2 = points[(index + 1) % point_count]
        nx += (y1 - y2) * (z1 + z2)
        ny += (z1 - z2) * (x1 + x2)
        nz += (x1 - x2) * (y1 + y2)

    normal = (abs(nx), abs(ny), abs(nz))
    if max(normal) > 1e-12:
        return normal.index(max(normal))

    xs = [point[0] for point in points]
    ys = [point[1] for point in points]
    zs = [point[2] for point in points]
    extents = (max(xs) - min(xs), max(ys) - min(ys), max(zs) - min(zs))
    return extents.index(min(extents))


def project_point(point: tuple[float, float, float], drop_axis: int) -> tuple[float, float]:
    x, y, z = point
    if drop_axis == 0:
        return (y, z)
    if drop_axis == 1:
        return (x, z)
    return (x, y)


def geodetic_to_enu(lat_deg: float, lon_deg: float, height: float, origin: Origin) -> tuple[float, float, float]:
    x, y, z = geodetic_to_ecef(lat_deg, lon_deg, height)
    dx = x - origin.x0
    dy = y - origin.y0
    dz = z - origin.z0

    east = (-origin.sin_lon * dx) + (origin.cos_lon * dy)
    north = (
        (-origin.sin_lat * origin.cos_lon * dx)
        + (-origin.sin_lat * origin.sin_lon * dy)
        + (origin.cos_lat * dz)
    )
    up = (
        (origin.cos_lat * origin.cos_lon * dx)
        + (origin.cos_lat * origin.sin_lon * dy)
        + (origin.sin_lat * dz)
    )
    return east, north, up


def build_uv_vertices(
    polygon: ParsedPolygon,
    texture_binding: TextureBinding,
) -> list[tuple[float, float]] | None:
    uv_vertices: list[tuple[float, float]] = []
    for ring in polygon.rings:
        if ring.ring_id is None:
            return None
        ring_key = f"#{ring.ring_id}"
        uv_ring = texture_binding.ring_uvs.get(ring_key)
        if uv_ring is None:
            return None
        if len(uv_ring) != len(ring.points):
            return None
        uv_vertices.extend(uv_ring)
    return uv_vertices


def clean_point_loop(points: Sequence[tuple[float, float, float]]) -> list[tuple[float, float, float]]:
    cleaned: list[tuple[float, float, float]] = []
    for point in points:
        if cleaned and almost_same_point(cleaned[-1], point):
            continue
        cleaned.append(point)
    if len(cleaned) >= 2 and almost_same_point(cleaned[0], cleaned[-1]):
        cleaned.pop()
    return cleaned


def clean_uv_loop(coords: Sequence[tuple[float, float]], eps: float = 1e-9) -> tuple[tuple[float, float], ...]:
    cleaned: list[tuple[float, float]] = []
    for uv in coords:
        if cleaned and abs(cleaned[-1][0] - uv[0]) <= eps and abs(cleaned[-1][1] - uv[1]) <= eps:
            continue
        cleaned.append(uv)
    if len(cleaned) >= 2:
        first = cleaned[0]
        last = cleaned[-1]
        if abs(first[0] - last[0]) <= eps and abs(first[1] - last[1]) <= eps:
            cleaned.pop()
    return tuple(cleaned)


def load_texture_bindings(path: Path) -> dict[str, TextureBinding]:
    bindings: dict[str, TextureBinding] = {}
    context = etree.iterparse(
        str(path),
        events=("end",),
        tag="{http://www.opengis.net/citygml/appearance/2.0}ParameterizedTexture",
        recover=True,
        huge_tree=True,
    )
    for _, elem in context:
        image_uri = elem.findtext("app:imageURI", namespaces=NS)
        if not image_uri:
            clear_element(elem)
            continue
        image_path = (path.parent / image_uri).resolve()
        for target in elem.findall("app:target", namespaces=NS):
            polygon_uri = target.get("uri")
            if not polygon_uri or polygon_uri in bindings:
                continue
            ring_uvs: dict[str, tuple[tuple[float, float], ...]] = {}
            ok = True
            for tex_coords in target.findall(".//app:textureCoordinates", namespaces=NS):
                ring_ref = tex_coords.get("ring")
                if not ring_ref or not tex_coords.text:
                    ok = False
                    break
                values = [float(value) for value in tex_coords.text.split()]
                if len(values) % 2 != 0:
                    ok = False
                    break
                uv_pairs = [(values[index], values[index + 1]) for index in range(0, len(values), 2)]
                cleaned = clean_uv_loop(uv_pairs)
                if len(cleaned) < 3:
                    ok = False
                    break
                ring_uvs[ring_ref] = cleaned
            if ok and ring_uvs:
                bindings[polygon_uri] = TextureBinding(
                    source_image_path=image_path,
                    image_uri=image_uri,
                    ring_uvs=ring_uvs,
                )
        clear_element(elem)
    return bindings


def geodetic_to_ecef(lat_deg: float, lon_deg: float, height: float) -> tuple[float, float, float]:
    a = 6378137.0
    f = 1.0 / 298.257222101
    e2 = (2.0 * f) - (f * f)

    lat = math.radians(lat_deg)
    lon = math.radians(lon_deg)
    sin_lat = math.sin(lat)
    cos_lat = math.cos(lat)
    sin_lon = math.sin(lon)
    cos_lon = math.cos(lon)
    n = a / math.sqrt(1.0 - (e2 * sin_lat * sin_lat))

    x = (n + height) * cos_lat * cos_lon
    y = (n + height) * cos_lat * sin_lon
    z = ((1.0 - e2) * n + height) * sin_lat
    return x, y, z


def local_name(elem: etree._Element) -> str:
    return elem.tag.split("}")[-1]


def almost_same_point(
    lhs: tuple[float, float, float], rhs: tuple[float, float, float], eps: float = 1e-9
) -> bool:
    return (
        abs(lhs[0] - rhs[0]) <= eps
        and abs(lhs[1] - rhs[1]) <= eps
        and abs(lhs[2] - rhs[2]) <= eps
    )


def clear_element(elem: etree._Element) -> None:
    elem.clear()
    while elem.getprevious() is not None:
        del elem.getparent()[0]


def sanitize_name(name: str) -> str:
    return re.sub(r"[^A-Za-z0-9_.-]+", "_", name)


class MeshWriter:
    def start_object(self, layer: str, object_id: str) -> None:  # pragma: no cover - protocol style
        raise NotImplementedError

    def add_polygon(
        self,
        layer: str,
        object_id: str,
        vertices: Sequence[tuple[float, float, float]],
        triangles: np.ndarray,
        *,
        uv_vertices: Sequence[tuple[float, float]] | None = None,
        texture_path: Path | None = None,
    ) -> None:  # pragma: no cover - protocol style
        raise NotImplementedError

    def close(self) -> None:  # pragma: no cover - protocol style
        raise NotImplementedError


class ObjWriter(MeshWriter):
    def __init__(
        self,
        path: Path,
        origin: Origin,
        source_files: Sequence[SourceFile],
        *,
        texture_mode: str = "none",
    ) -> None:
        self.path = path
        self.handle = path.open("w", encoding="utf-8", newline="\n")
        self.vertex_index = 1
        self.texture_index = 1
        self.texture_mode = texture_mode
        self.current_material: str | None = None
        self.materials: dict[Path, str] = {}
        self.material_records: list[tuple[str, Path | None]] = []
        self.copied_textures: dict[Path, Path] = {}
        source_label = ", ".join(source.path.name for source in source_files)
        self.handle.write("# Exported from PLATEAU CityGML\n")
        self.handle.write(f"# Sources: {source_label}\n")
        self.handle.write(
            f"# Local origin lat/lon/h: {origin.lat_deg:.9f}, {origin.lon_deg:.9f}, {origin.h:.3f}\n"
        )
        self.handle.write("# Axes: X=east, Y=up, Z=north\n")
        self.mtl_path: Path | None = None
        if self.texture_mode != "none":
            self.mtl_path = path.with_suffix(".mtl")
            self.handle.write(f"mtllib {self.mtl_path.name}\n")

    def start_object(self, layer: str, object_id: str) -> None:
        self.handle.write(f"o {sanitize_name(layer + '_' + object_id)}\n")

    def add_polygon(
        self,
        layer: str,
        object_id: str,
        vertices: Sequence[tuple[float, float, float]],
        triangles: np.ndarray,
        *,
        uv_vertices: Sequence[tuple[float, float]] | None = None,
        texture_path: Path | None = None,
    ) -> None:
        base_index = self.vertex_index
        vertex_lines = [
            f"v {vertex[0]:.6f} {vertex[1]:.6f} {vertex[2]:.6f}\n" for vertex in vertices
        ]
        self.handle.writelines(vertex_lines)
        self.vertex_index += len(vertices)

        texture_base_index = None
        material_name = None
        if self.texture_mode != "none":
            material_name = self._material_name(texture_path if uv_vertices is not None else None)
            self._use_material(material_name)
            if uv_vertices is not None:
                texture_base_index = self.texture_index
                vt_lines = [f"vt {uv[0]:.6f} {uv[1]:.6f}\n" for uv in uv_vertices]
                self.handle.writelines(vt_lines)
                self.texture_index += len(uv_vertices)

        face_lines = []
        for tri_index in range(0, triangles.size, 3):
            a = base_index + int(triangles[tri_index + 0])
            b = base_index + int(triangles[tri_index + 1])
            c = base_index + int(triangles[tri_index + 2])
            if texture_base_index is None:
                face_lines.append(f"f {a} {b} {c}\n")
            else:
                ta = texture_base_index + int(triangles[tri_index + 0])
                tb = texture_base_index + int(triangles[tri_index + 1])
                tc = texture_base_index + int(triangles[tri_index + 2])
                face_lines.append(f"f {a}/{ta} {b}/{tb} {c}/{tc}\n")
        self.handle.writelines(face_lines)

    def _material_name(self, texture_path: Path | None) -> str:
        if texture_path is None:
            material_name = "mat_untextured"
            if not any(name == material_name for name, _ in self.material_records):
                self.material_records.append((material_name, None))
            return material_name
        material_name = self.materials.get(texture_path)
        if material_name is None:
            material_name = f"mat_{len(self.materials) + 1:05d}"
            self.materials[texture_path] = material_name
            self.material_records.append((material_name, texture_path))
        return material_name

    def _use_material(self, material_name: str) -> None:
        if self.current_material != material_name:
            self.handle.write(f"usemtl {material_name}\n")
            self.current_material = material_name

    def _texture_output_path(self, texture_path: Path) -> Path:
        if self.texture_mode == "reference":
            return Path(os.path.relpath(texture_path, self.path.parent))
        copied = self.copied_textures.get(texture_path)
        if copied is not None:
            return copied
        target = self.path.parent / f"{self.path.stem}_textures" / texture_path.parent.name / texture_path.name
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(texture_path, target)
        rel_target = Path(target.relative_to(self.path.parent))
        self.copied_textures[texture_path] = rel_target
        return rel_target

    def _write_mtl(self) -> None:
        if self.mtl_path is None:
            return
        with self.mtl_path.open("w", encoding="utf-8", newline="\n") as handle:
            handle.write("# Exported from PLATEAU CityGML\n")
            for material_name, texture_path in self.material_records:
                handle.write(f"newmtl {material_name}\n")
                handle.write("Ka 1.000000 1.000000 1.000000\n")
                handle.write("Kd 1.000000 1.000000 1.000000\n")
                handle.write("Ks 0.000000 0.000000 0.000000\n")
                handle.write("d 1.0\n")
                handle.write("illum 1\n")
                if texture_path is not None:
                    rel_texture = self._texture_output_path(texture_path)
                    handle.write(f"map_Kd {rel_texture.as_posix()}\n")
                handle.write("\n")

    def close(self) -> None:
        self.handle.close()
        self._write_mtl()


class FbxWriter(MeshWriter):
    def __init__(self, path: Path, origin: Origin, source_files: Sequence[SourceFile]) -> None:
        self.path = path
        self.origin = origin
        self.source_files = source_files
        self.vertex_value_count = 0
        self.index_value_count = 0
        self.vertex_count = 0
        self._first_vertex_value = True
        self._first_index_value = True

        self.vertices_tmp = tempfile.NamedTemporaryFile(
            "w", encoding="utf-8", newline="\n", delete=False, dir=path.parent, prefix=path.stem + "_v_"
        )
        self.indices_tmp = tempfile.NamedTemporaryFile(
            "w", encoding="utf-8", newline="\n", delete=False, dir=path.parent, prefix=path.stem + "_i_"
        )

    def start_object(self, layer: str, object_id: str) -> None:
        return

    def add_polygon(
        self,
        layer: str,
        object_id: str,
        vertices: Sequence[tuple[float, float, float]],
        triangles: np.ndarray,
        *,
        uv_vertices: Sequence[tuple[float, float]] | None = None,
        texture_path: Path | None = None,
    ) -> None:
        base_vertex = self.vertex_count
        vertex_values: list[str] = []
        for x, y, z in vertices:
            vertex_values.extend((fmt_fbx_float(x), fmt_fbx_float(y), fmt_fbx_float(z)))
        self._write_value_block(self.vertices_tmp, vertex_values, is_vertex_block=True)
        self.vertex_count += len(vertices)
        self.vertex_value_count += len(vertices) * 3

        polygon_values: list[str] = []
        for tri_index in range(0, triangles.size, 3):
            a = base_vertex + int(triangles[tri_index + 0])
            b = base_vertex + int(triangles[tri_index + 1])
            c = base_vertex + int(triangles[tri_index + 2])
            polygon_values.extend((str(a), str(b), str(-(c + 1))))
        self._write_value_block(self.indices_tmp, polygon_values, is_vertex_block=False)
        self.index_value_count += triangles.size

    def _write_value_block(self, handle, values: Sequence[str], *, is_vertex_block: bool) -> None:
        if not values:
            return
        first_attr = "_first_vertex_value" if is_vertex_block else "_first_index_value"
        if getattr(self, first_attr):
            handle.write(",".join(values))
            setattr(self, first_attr, False)
        else:
            handle.write("," + ",".join(values))

    def close(self) -> None:
        self.vertices_tmp.close()
        self.indices_tmp.close()
        try:
            with self.path.open("w", encoding="utf-8", newline="\n") as handle:
                handle.write(render_fbx_header(self.origin, self.vertex_value_count, self.index_value_count))
                stream_file(handle, Path(self.vertices_tmp.name))
                handle.write("\n        }\n")
                handle.write(f"        PolygonVertexIndex: *{self.index_value_count} {{\n")
                handle.write("            a: ")
                stream_file(handle, Path(self.indices_tmp.name))
                handle.write("\n        }\n")
                handle.write(render_fbx_footer())
        finally:
            Path(self.vertices_tmp.name).unlink(missing_ok=True)
            Path(self.indices_tmp.name).unlink(missing_ok=True)


def fmt_fbx_float(value: float) -> str:
    if abs(value) < 0.0000005:
        value = 0.0
    return f"{value:.6f}"


def render_fbx_header(origin: Origin, vertex_value_count: int, index_value_count: int) -> str:
    now = datetime.now(UTC)
    return f"""; FBX 7.3.0 project file
FBXHeaderExtension:  {{
    FBXHeaderVersion: 1003
    FBXVersion: 7300
    CreationTimeStamp:  {{
        Version: 1000
        Year: {now.year}
        Month: {now.month}
        Day: {now.day}
        Hour: {now.hour}
        Minute: {now.minute}
        Second: {now.second}
        Millisecond: 0
    }}
    Creator: "plateau_citygml_to_mesh.py"
}}
GlobalSettings:  {{
    Version: 1000
    Properties70:  {{
        P: "UpAxis", "int", "Integer", "",1
        P: "UpAxisSign", "int", "Integer", "",1
        P: "FrontAxis", "int", "Integer", "",2
        P: "FrontAxisSign", "int", "Integer", "",1
        P: "CoordAxis", "int", "Integer", "",0
        P: "CoordAxisSign", "int", "Integer", "",1
        P: "UnitScaleFactor", "double", "Number", "",1
        P: "OriginalUnitScaleFactor", "double", "Number", "",1
    }}
}}
Definitions:  {{
    Version: 100
    Count: 2
    ObjectType: "Geometry" {{
        Count: 1
    }}
    ObjectType: "Model" {{
        Count: 1
    }}
}}
Objects:  {{
    Geometry: 1, "Geometry::MergedMesh", "Mesh" {{
        GeometryVersion: 124
        Vertices: *{vertex_value_count} {{
            a: """


def render_fbx_footer() -> str:
    return """
        Layer: 0 {
            Version: 100
        }
    }
    Model: 2, "Model::MergedMesh", "Mesh" {
        Version: 232
        Properties70:  {
            P: "Lcl Translation", "Lcl Translation", "", "A",0,0,0
            P: "Lcl Rotation", "Lcl Rotation", "", "A",0,0,0
            P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
        }
        Shading: T
        Culling: "CullingOff"
    }
}
Connections:  {
    C: "OO",1,2
    C: "OO",2,0
}
Takes:  {
    Current: ""
}
"""


def stream_file(out_handle, path: Path, chunk_size: int = 1024 * 1024) -> None:
    with path.open("r", encoding="utf-8") as in_handle:
        while True:
            chunk = in_handle.read(chunk_size)
            if not chunk:
                break
            out_handle.write(chunk)


def render_summary(
    args: argparse.Namespace,
    source_files: Sequence[SourceFile],
    origin: Origin,
    stats: ExportStats,
) -> str:
    lines = [
        f"dataset_root: {args.dataset_root}",
        f"meshes: {', '.join(args.meshes)}",
        f"layers: {', '.join(args.layers)}",
        f"lod: {args.lod if args.lod is not None else 'highest-per-object'}",
        f"formats: {', '.join(args.formats)}",
        f"obj_textures: {args.obj_textures}",
        f"output_dir: {args.output_dir}",
        f"output_name: {args.output_name}",
        f"source_files: {len(source_files)}",
        f"origin_lat_lon_h: {origin.lat_deg:.9f}, {origin.lon_deg:.9f}, {origin.h:.3f}",
        f"objects_exported: {stats.objects}",
        f"polygons_exported: {stats.polygons}",
        f"triangles_exported: {stats.triangles}",
        f"polygons_skipped: {stats.skipped_polygons}",
        f"textured_polygons: {stats.textured_polygons}",
        "lod_counts: " + ", ".join(f"lod{lod}={count}" for lod, count in sorted(stats.lod_counts.items())),
        "layer_polygons: "
        + ", ".join(f"{layer}={count}" for layer, count in sorted(stats.layer_polygons.items())),
    ]
    return "\n".join(lines)


if __name__ == "__main__":
    raise SystemExit(main())
