package io.oyasai.survival.enderkeep;

import java.io.*;
import java.nio.channels.FileChannel;
import java.nio.file.*;
import java.util.UUID;
import java.util.zip.CRC32;
import static java.nio.file.StandardCopyOption.*;

final class PlayerStore {
    private static final int MAGIC = 0x53454B01;
    private final Path directory;
    record Snapshot(UUID world, int count, byte[] items) {}

    PlayerStore(Path directory) { this.directory = directory; }

    Snapshot read(UUID player) throws IOException {
        Path path = directory.resolve(player + ".dat");
        byte[] bytes;
        try { bytes = Files.readAllBytes(path); }
        catch (NoSuchFileException e) { return null; }
        if (bytes.length < 36) throw new IOException("Truncated snapshot");
        CRC32 crc = new CRC32();
        crc.update(bytes, 0, bytes.length - Long.BYTES);
        try (var input = new DataInputStream(new ByteArrayInputStream(bytes))) {
            if (input.readInt() != MAGIC) throw new IOException("Unknown snapshot format");
            UUID world = new UUID(input.readLong(), input.readLong());
            int count = input.readInt(), length = input.readInt();
            if (count < 0 || length <= 0 || length != bytes.length - 36) {
                throw new IOException("Invalid snapshot length/count");
            }
            byte[] items = input.readNBytes(length);
            if (input.readLong() != crc.getValue()) throw new IOException("Snapshot checksum mismatch");
            return new Snapshot(world, count, items);
        }
    }

    void write(UUID player, Snapshot snapshot) throws IOException {
        Files.createDirectories(directory);
        var buffer = new ByteArrayOutputStream();
        try (var output = new DataOutputStream(buffer)) {
            output.writeInt(MAGIC);
            output.writeLong(snapshot.world().getMostSignificantBits());
            output.writeLong(snapshot.world().getLeastSignificantBits());
            output.writeInt(snapshot.count());
            output.writeInt(snapshot.items().length);
            output.write(snapshot.items());
            CRC32 crc = new CRC32();
            crc.update(buffer.toByteArray());
            output.writeLong(crc.getValue());
        }
        Path temp = Files.createTempFile(directory, player + "-", ".tmp");
        try {
            Files.write(temp, buffer.toByteArray());
            try (var channel = FileChannel.open(temp, StandardOpenOption.WRITE)) { channel.force(true); }
            // Fail closed if this filesystem cannot replace the file atomically.
            Files.move(temp, directory.resolve(player + ".dat"), ATOMIC_MOVE, REPLACE_EXISTING);
        } finally {
            Files.deleteIfExists(temp);
        }
    }
}
