#!/usr/bin/env python3
"""Stopped-server export of shops.db to legacy sellers.yml (PyYAML==6.0.2)."""

import argparse
import os
import sqlite3
import tempfile
from pathlib import Path

import yaml

SECTIONS = ("sellers", "deferred_sellers", "invalid_sellers")


class StrictLoader(yaml.SafeLoader):
    def compose_node(self, parent, index):
        if self.check_event(yaml.AliasEvent):
            raise ValueError("YAML aliases are unsupported")
        return super().compose_node(parent, index)

    def construct_mapping(self, node, deep=False):
        result = {}
        for key_node, value_node in node.value:
            key = self.construct_object(key_node, deep=deep)
            if not isinstance(key, str) or key in result:
                raise ValueError("YAML keys must be unique strings")
            result[key] = self.construct_object(value_node, deep=deep)
        return result


def read_yaml(text):
    for event in yaml.parse(text):
        if isinstance(event, yaml.AliasEvent) or getattr(event, "anchor", None) is not None:
            raise ValueError("YAML aliases are unsupported")
        if getattr(event, "tag", None) is not None:
            raise ValueError("YAML tags are unsupported")
    value = yaml.load(text, Loader=StrictLoader)
    if not isinstance(value, dict):
        raise ValueError("YAML root must be a mapping")
    return value


def export(db_path: Path, output: Path):
    if os.path.lexists(output):
        raise FileExistsError(f"output already exists: {output}")
    uri = f"file:{db_path.resolve()}?mode=ro"
    with sqlite3.connect(uri, uri=True) as db:
        meta = dict(db.execute("SELECT key,value FROM schema_meta"))
        if meta.get("schema_version") != "1":
            raise ValueError("unsupported or incomplete DB")
        unresolved = db.execute(
            "SELECT count(*) FROM shop_transactions WHERE status IN ('pending','compensation_failed') AND reviewed_at IS NULL"
        ).fetchone()[0]
        if unresolved:
            raise ValueError(f"{unresolved} transactions need review")
        root = read_yaml(meta["source_root_yaml"])
        if any(section in root for section in SECTIONS):
            raise ValueError("source root includes shop sections")
        for section in SECTIONS:
            root[section] = {}
        for section, key, fragment in db.execute("SELECT section,shop_key,record_yaml FROM shops ORDER BY rowid"):
            if section not in SECTIONS or key in root[section]:
                raise ValueError("invalid or duplicate shop key")
            record = read_yaml(fragment)
            root[section][key] = record
        data = yaml.safe_dump(root, allow_unicode=True, sort_keys=False)
        if read_yaml(data) != root:
            raise ValueError("export verification failed")
        fd, temporary = tempfile.mkstemp(prefix=output.name + ".", dir=output.parent)
        try:
            with os.fdopen(fd, "w", encoding="utf-8") as stream:
                stream.write(data)
                stream.flush()
                os.fsync(stream.fileno())
            verified = read_yaml(Path(temporary).read_text(encoding="utf-8"))
            for section in SECTIONS:
                if verified[section] != root[section]:
                    raise ValueError(f"{section} verification failed")
            if verified != root:
                raise ValueError("root verification failed")
            os.link(temporary, output)
        finally:
            if os.path.exists(temporary):
                os.unlink(temporary)
    return {section: len(root[section]) for section in SECTIONS}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    print(export(args.input, args.output))


if __name__ == "__main__":
    main()
