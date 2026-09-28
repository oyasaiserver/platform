package icu.oyasai.citiesskymine.crowd;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.sk89q.jnbt.CompoundTag;
import com.sk89q.jnbt.IntArrayTag;
import com.sk89q.jnbt.ListTag;
import com.sk89q.jnbt.StringTag;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.junit.jupiter.api.Test;

class CrowdHeadsTest {
  @Test
  void readsClipboardHeadProfile() {
    var property = new CompoundTag(Map.of(
        "name", new StringTag("textures"),
        "value", new StringTag("skin-value"),
        "signature", new StringTag("signed")));
    var profile = new CompoundTag(Map.of(
        "id", new IntArrayTag(new int[] {1, 2, 3, 4}),
        "name", new StringTag("Builder"),
        "properties", new ListTag(CompoundTag.class, List.of(property))));

    var head = CrowdHeadsKt.headTextureFromNbt(new CompoundTag(Map.of("profile", profile)));

    assertEquals(new UUID(0x0000000100000002L, 0x0000000300000004L), head.getId());
    assertEquals("Builder", head.getName());
    assertEquals("skin-value", head.getValue());
    assertEquals("signed", head.getSignature());
  }
}
