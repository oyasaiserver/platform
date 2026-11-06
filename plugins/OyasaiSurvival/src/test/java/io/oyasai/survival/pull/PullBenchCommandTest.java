package io.oyasai.survival.pull;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.UUID;
import org.bukkit.Material;
import org.bukkit.block.Chest;
import org.bukkit.block.BlockFace;
import org.bukkit.command.ConsoleCommandSender;
import org.bukkit.inventory.ItemStack;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import static io.oyasai.survival.pull.InventoryTestSupport.*;
import static io.oyasai.survival.pull.WarehouseIndexTest.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PullBenchCommandTest extends ItemStackTestSupport {
    @TempDir Path directory;
    @Test void allScenariosProduceUnchangedCsvAndTakeRuns100RealStackWithdrawalsWithoutLoss() throws Exception {
        var f=new IndexTestSupport();when(f.plugin.getDataFolder()).thenReturn(directory.toFile());f.plugin.getConfig().set("debug.bench",true);
        when(f.plugin.getResource("ja_jp_names.json")).thenAnswer(c->getClass().getResourceAsStream("/pull/ja_jp_names.json"));
        var meta=mock(io.papermc.paper.plugin.configuration.PluginMeta.class);when(meta.getVersion()).thenReturn("3.0.0");when(f.plugin.getPluginMeta()).thenReturn(meta);
        var link=new Warehouse.Link(List.of(new SurvivalPull.Position(0,66,0),new SurvivalPull.Position(1,66,0)),Material.CHEST);
        f.manager.warehouses.clear();f.wh=new Warehouse(UUID.fromString("c371ed0c-f923-4771-8183-2ea44e7672bc"),"bench",f.world.getUID(),PullBench.OWNER,new java.util.HashSet<>(),0,64,0,1,64,0,new java.util.HashSet<>(),new java.util.LinkedHashSet<>(List.of(link)));
        f.manager.warehouses.put(f.wh.id(),f.wh);
        var a=inventory(new ItemStack[27]);var b=inventory(new ItemStack[27]);f.add(org.bukkit.block.Barrel.class,Material.BARREL,0,64,0,a);f.add(org.bukkit.block.Barrel.class,Material.BARREL,1,64,0,b);
        var inputA=inventory(new ItemStack[27]);var inputB=inventory(new ItemStack[27]);
        var left=f.add(Chest.class,Material.CHEST,0,66,0,inputA);var right=f.add(Chest.class,Material.CHEST,1,66,0,inputB);
        chestData(left,org.bukkit.block.data.type.Chest.Type.LEFT,BlockFace.NORTH);chestData(right,org.bukkit.block.data.type.Chest.Type.RIGHT,BlockFace.NORTH);
        f.load();var bench=new PullBench(f.plugin,f.manager);
        var field=PullBench.class.getDeclaredField("warehouse");field.setAccessible(true);field.set(bench,f.wh);
        when(f.server.createInventory(isNull(),eq(9))).thenAnswer(c->inventory(new ItemStack[9]));
        var sender=mock(ConsoleCommandSender.class);
        var stone=mock(Material.class);when(stone.name()).thenReturn("STONE");when(stone.getMaxStackSize()).thenReturn(64);
        when(stone.getKey()).thenReturn(org.bukkit.NamespacedKey.minecraft("stone"));when(stone.getItemTranslationKey()).thenReturn("block.minecraft.stone");
        var dirt=mock(Material.class);when(dirt.name()).thenReturn("DIRT");when(dirt.getMaxStackSize()).thenReturn(64);
        when(dirt.getKey()).thenReturn(org.bukkit.NamespacedKey.minecraft("dirt"));when(dirt.getItemTranslationKey()).thenReturn("block.minecraft.dirt");
        try(var samples=mockStatic(PullBench.class,CALLS_REAL_METHODS)) {
            samples.when(()->PullBench.samples(anyLong(),anyInt(),anyBoolean())).thenAnswer(c->{
                int size=c.getArgument(1);boolean input=c.getArgument(2);var result=new PullBench.Sample[size];
                for(int i=0;i<size;i++)if(input||i%2==0){var sample=mock(PullBench.Sample.class);when(sample.item()).thenAnswer(v->item(input?dirt:stone,64,"plain"));result[i]=sample;}return result;
            });
            bench.command(sender,new String[]{"reset"});while(!f.index.ready(f.wh))f.index.tick();
            bench.command(sender,new String[]{"run","all","1"});for(int i=0;i<250;i++)f.step();
            verify(sender,never()).sendMessage(contains("中断"));verify(sender).sendMessage(contains("take #1"));
            List<Path> files;try(var paths=Files.list(directory.resolve("bench"))){files=paths.toList();}
            assertEquals(5,files.size());
            for(var file:files){var lines=Files.readAllLines(file);assertEquals(PullBench.HEADER,lines.getFirst());assertEquals(2,lines.size());assertEquals(15,lines.get(1).split(",").length);}
            var take=files.stream().filter(p->p.getFileName().toString().contains("-take.csv")).findFirst().orElseThrow();
            var values=Files.readAllLines(take).get(1).split(",");assertEquals("6400",values[11]);assertTrue(Double.parseDouble(values[7])>0);assertTrue(Double.parseDouble(values[8])<=Double.parseDouble(values[7]));
            assertEquals(27*64,sum(a,b,inputA,inputB));assertIndex(f,a,b);
        }
    }
}
