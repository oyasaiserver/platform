package io.oyasai.survival;

import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import static java.nio.file.LinkOption.NOFOLLOW_LINKS;
import static java.nio.file.StandardCopyOption.ATOMIC_MOVE;

final class LegacyDataMigration {
    private LegacyDataMigration() {}

    static boolean copy(Path source, Path target) throws IOException {
        if (Files.exists(target, NOFOLLOW_LINKS) || !Files.exists(source, NOFOLLOW_LINKS)) return false;
        if (!Files.isDirectory(source, NOFOLLOW_LINKS)) throw new IOException("Not a directory: " + source);
        Files.createDirectories(target.getParent());
        Path staging = Files.createTempDirectory(target.getParent(), "." + target.getFileName() + "-migration-");
        try {
            Files.walkFileTree(source, new SimpleFileVisitor<>() {
                @Override public FileVisitResult preVisitDirectory(Path directory, BasicFileAttributes attrs) throws IOException {
                    Files.createDirectories(staging.resolve(source.relativize(directory)));
                    return FileVisitResult.CONTINUE;
                }

                @Override public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                    if (!attrs.isRegularFile()) throw new IOException("Not a regular file: " + file);
                    Files.copy(file, staging.resolve(source.relativize(file)));
                    return FileVisitResult.CONTINUE;
                }
            });
            // An incomplete copy must never become the feature's live data directory.
            Files.move(staging, target, ATOMIC_MOVE);
            return true;
        } finally {
            if (Files.exists(staging)) {
                Files.walkFileTree(staging, new SimpleFileVisitor<>() {
                    @Override public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                        Files.delete(file);
                        return FileVisitResult.CONTINUE;
                    }

                    @Override public FileVisitResult postVisitDirectory(Path directory, IOException error) throws IOException {
                        if (error != null) throw error;
                        Files.delete(directory);
                        return FileVisitResult.CONTINUE;
                    }
                });
            }
        }
    }
}
