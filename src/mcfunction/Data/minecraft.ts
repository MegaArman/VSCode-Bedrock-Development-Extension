/*BSD 3-Clause License

Copyright (c) 2020, Blockception Ltd
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.*/

export class MinecraftData {
    
    public Blocks: string[];
    public Effects: string[];
    public Enchants: string[];
    public Entities: string[];
    public Items: string[];

    constructor() {
        this.Blocks = ["acacia_button", "acacia_door", "acacia_fence_gate", "acacia_pressure_plate", "acacia_stairs", "acacia_standing_sign", "acacia_trapdoor", "acacia_wall_sign", "activator_rail", "air", "andesite_stairs", "anvil", "bamboo", "bamboo_sapling", "barrel", "barrier", "beacon", "bed", "bedrock", "bee_nest", "beehive", "beetroot", "bell", "birch_button", "birch_door", "birch_fence_gate", "birch_pressure_plate", "birch_stairs", "birch_standing_sign", "birch_trapdoor", "birch_wall_sign", "black_glazed_terracotta", "blast_furnace", "blue_glazed_terracotta", "blue_ice", "bone_block", "bookshelf", "brewing_stand", "brick_block", "brick_stairs", "brown_glazed_terracotta", "brown_mushroom", "brown_mushroom_block", "bubble_column", "cactus", "cake", "camera", "campfire", "carpet", "carrots", "cartography_table", "carved_pumpkin", "cauldron", "chain_command_block", "chemical_heat", "chemistry_table", "chest", "chorus_flower", "chorus_plant", "clay", "coal_block", "coal_ore", "cobblestone", "cobblestone_wall", "cocoa", "colored_torch_bp", "colored_torch_rg", "command_block", "composter", "concrete", ".concretered", "concrete.black", "concretePowder", "conduit", "coral", "coral_block", "coral_fan", "coral_fan_dead", "coral_fan_hang", "coral_fan_hang2", "coral_fan_hang3", "crafting_table", "cyan_glazed_terracotta", "dark_oak_button", "dark_oak_door", "dark_oak_fence_gate", "dark_oak_pressure_plate", "dark_oak_stairs", "dark_oak_trapdoor", "dark_prismarine_stairs", "darkoak_standing_sign", "darkoak_wall_sign", "daylight_detector", "daylight_detector_inverted", "deadbush", "detector_rail", "diamond_block", "diamond_ore", "diorite_stairs", "dirt", "dispenser", "double_plant", "double_stone_slab", "double_stone_slab2", "double_stone_slab3", "double_stone_slab4", "double_wooden_slab", "dragon_egg", "dried_kelp_block", "dropper", "element_0", "element_1", "element_2", "element_3", "element_4", "element_5", "element_6", "element_7", "element_8", "element_9", "element_10", "element_11", "element_12", "element_13", "element_14", "element_15", "element_16", "element_17", "element_18", "element_19", "element_20", "element_21", "element_22", "element_23", "element_24", "element_25", "element_26", "element_27", "element_28", "element_29", "element_30", "element_31", "element_32", "element_33", "element_34", "element_35", "element_36", "element_37", "element_38", "element_39", "element_40", "element_41", "element_42", "element_43", "element_44", "element_45", "element_46", "element_47", "element_48", "element_49", "element_50", "element_51", "element_52", "element_53", "element_54", "element_55", "element_56", "element_57", "element_58", "element_59", "element_60", "element_61", "element_62", "element_63", "element_64", "element_65", "element_66", "element_67", "element_68", "element_69", "element_70", "element_71", "element_72", "element_73", "element_74", "element_75", "element_76", "element_77", "element_78", "element_79", "element_80", "element_81", "element_82", "element_83", "element_84", "element_85", "element_86", "element_87", "element_88", "element_89", "element_90", "element_91", "element_92", "element_93", "element_94", "element_95", "element_96", "element_97", "element_98", "element_99", "element_100", "element_101", "element_102", "element_103", "element_104", "element_105", "element_106", "element_107", "element_108", "element_109", "element_110", "element_111", "element_112", "element_113", "element_114", "element_115", "element_116", "element_117", "element_118", "emerald_block", "emerald_ore", "enchanting_table", "end_brick_stairs", "end_bricks", "end_gateway", "end_portal", "end_portal_frame", "end_rod", "end_stone", "ender_chest", "farmland", "fence", "fence_gate", "fire", "fletching_table", "flower_pot", "flowing_lava", "flowing_water", "frame", "frosted_ice", "furnace", "glass", "glass_pane", "glowingobsidian", "glowstone", "gold_block", "gold_ore", "golden_rail", "granite_stairs", "grass", "grass_path", "gravel", "gray_glazed_terracotta", "green_glazed_terracotta", "grindstone", "hard_glass", "hard_glass_pane", "hard_stained_glass", "hard_stained_glass_pane", "hardened_clay", "hay_block", "heavy_weighted_pressure_plate", "honey_block", "honeycomb_block", "hopper", "ice", "invisibleBedrock", "iron_bars", "iron_block", "iron_door", "iron_ore", "iron_trapdoor", "jigsaw", "jukebox", "jungle_button", "jungle_door", "jungle_fence_gate", "jungle_pressure_plate", "jungle_stairs", "jungle_standing_sign", "jungle_trapdoor", "jungle_wall_sign", "kelp", "ladder", "lantern", "lapis_block", "lapis_ore", "lava", "lava_cauldron", "leaves", "leaves2", "lectern", "lever", "light_block", "light_blue_glazed_terracotta", "light_weighted_pressure_plate", "lime_glazed_terracotta", "lit_blast_furnace", "lit_furnace", "lit_pumpkin", "lit_redstone_lamp", "lit_redstone_ore", "lit_smoker", "log", "log2", "loom", "magenta_glazed_terracotta", "magma", "melon_block", "melon_stem", "mob_spawner", "monster_egg", "mossy_cobblestone", "mossy_cobblestone_stairs", "mossy_stone_brick_stairs", "movingBlock", "mycelium", "nether_brick", "nether_brick_fence", "nether_brick_stairs", "nether_wart", "nether_wart_block", "netherrack", "netherreactor", "normal_stone_stairs", "noteblock", "oak_stairs", "observer", "obsidian", "orange_glazed_terracotta", "packed_ice", "pink_glazed_terracotta", "piston", "pistonArmCollision", "planks", "podzol", "polished_andesite_stairs", "polished_diorite_stairs", "polished_granite_stairs", "portal", "potatoes", "powered_comparator", "powered_repeater", "prismarine", "prismarine_bricks_stairs", "prismarine_stairs", "pumpkin", "pumpkin_stem", "purple_glazed_terracotta", "purpur_block", "purpur_stairs", "quartz_block", "quartz_ore", "quartz_stairs", "rail", "red_flower", "red_glazed_terracotta", "red_mushroom", "red_mushroom_block", "red_nether_brick", "red_nether_brick_stairs", "red_sandstone", "red_sandstone_stairs", "redstone_block", "redstone_lamp", "redstone_ore", "redstone_torch", "redstone_wire", "reeds", "repeating_command_block", "sand", "sandstone", "sandstone_stairs", "sapling", "scaffolding", "seaLantern", "sea_pickle", "seagrass", "shulker_box", "silver_glazed_terracotta", "skull", "slime", "smithing_table", "smoker", "smooth_quartz_stairs", "smooth_red_sandstone_stairs", "smooth_sandstone_stairs", "smooth_stone", "snow", "snow_layer", "soul_sand", "sponge", "spruce_button", "spruce_door", "spruce_fence_gate", "spruce_pressure_plate", "spruce_stairs", "spruce_standing_sign", "spruce_trapdoor", "spruce_wall_sign", "stained_glass", "stained_glass_pane", "stained_hardened_clay", "standing_banner", "standing_sign", "stickyPistonArmCollision", "sticky_piston", "stone", "stone_brick_stairs", "stone_button", "stone_pressure_plate", "stone_slab", "stone_slab2", "stone_slab3", "stone_slab4", "stone_stairs", "stonebrick", "stonecutter", "stonecutter_block", "stripped_acacia_log", "stripped_birch_log", "stripped_dark_oak_log", "stripped_jungle_log", "stripped_oak_log", "stripped_spruce_log", "structure_block", "structure_void", "sweet_berry_bush", "tallgrass", "tnt", "torch", "trapdoor", "trapped_chest", "tripWire", "tripwire_hook", "turtle_egg", "underwater_torch", "undyed_shulker_box", "unlit_redstone_torch", "unpowered_comparator", "unpowered_repeater", "vine", "wall_banner", "wall_sign", "water", "waterlily", "web", "wheat", "white_glazed_terracotta", "wither_rose", "wood", "wooden_button", "wooden_door", "wooden_pressure_plate", "wooden_slab", "wool", "yellow_flower", "yellow_glazed_terracotta"];
        this.Effects = ["absorption", "bad_omen", "blindness", "conduit_power", "fatal_poison", "fire_resistance", "haste", "health_boost", "village_hero", "hunger", "instant_damage", "instant_health", "invisibility", "jump_boost", "levitation", "mining_fatigue", "nausea", "night_vision", "poison", "regeneration", "resistance", "saturation", "slow_falling", "slowness", "speed", "strength", "water_breathing", "weakness", "wither"];
        this.Enchants = ["aqua_affinity", "bane_of_arthropods", "blast_protection", "channeling", "depth_strider", "efficiency", "feather_falling", "fire_aspect", "fire_protection", "flame", "fortune", "frost_walker", "impaling", "infinity", "knockback", "looting", "loyalty", "luck_of_the_sea", "lure", "mending", "multishot", "piercing", "power", "projectile_protection", "punch", "respiration", "riptide", "sharpness", "silk_touch", "smite", "thorns", "unbreaking"];
        this.Entities = ["agent", "area_effect_cloud", "armor_stand", "arrow", "balloon", "bat", "bee", "blaze", "boat", "cat", "cave_spider", "chalkboard", "chest_minecart", "chicken", "cod", "command_block_minecart", "cow", "creeper", "dolphin", "donkey", "dragon_fireball", "drowned", "egg", "elder_guardian", "elder_guardian_ghost", "ender_crystal", "ender_dragon", "ender_pearl", "enderman", "endermite", "evocation_fang", "evocation_illager", "eye_of_ender_signal", "falling_block", "fireball", "fireworks_rocket", "fishing_hook", "fox", "ghast", "guardian", "hoglin", "hopper_minecart", "horse", "husk", "ice_bomb", "iron_golem", "item", "leash_knot", "lightning_bolt", "lingering_potion", "llama", "llama_spit", "magma_cube", "minecart", "mooshroom", "moving_block", "mule", "npc", "ocelot", "painting", "panda", "parrot", "phantom", "pig", "piglin", "pillager", "player", "polar_bear", "pufferfish", "rabbit", "ravager", "salmon", "sheep", "shield", "shulker", "shulker_bullet", "silverfish", "skeleton", "skeleton_horse", "slime", "small_fireball", "snow_golem", "snowball", "spider", "splash_potion", "squid", "stray", "strider", "thrown_trident", "tnt", "tnt_minecart", "tripod_camera", "tropicalfish", "turtle", "vex", "villager", "villager_v2", "vindicator", "wandering_trader", "witch", "wither", "wither_skeleton", "wither_skull", "wither_skull_dangerous", "wolf", "xp_bottle", "xp_orb", "zoglin", "zombie", "zombie_horse", "zombie_pigman", "zombie_villager", "zombie_villager_v2"]
        this.Items = ["acacia_door", "apple", "appleenchanted", "armor_stand", "arrow", "baked_potato", "balloon", "banner", "bed", "beef", "beetroot", "beetroot_seeds", "beetroot_soup", "birch_door", "blaze_powder", "blaze_rod", "bleach", "board", "boat", "bone", "book", "bow", "bowl", "bread", "brewing_stand", "brick", "bucket", "cake", "camera", "carrot", "carrotonastick", "cauldron", "chainmail_boots", "chainmail_chestplate", "chainmail_helmet", "chainmail_leggings", "chest_minecart", "chicken", "chorus_fruit", "chorus_fruit_popped", "clay_ball", "clock", "clownfish", "coal", "command_block_minecart", "comparator", "compass", "compound", "cooked_beef", "cooked_chicken", "cooked_fish", "cooked_porkchop", "cooked_rabbit", "cooked_salmon", "cookie", "dark_oak_door", "diamond", "diamond_axe", "diamond_boots", "diamond_chestplate", "diamond_helmet", "diamond_hoe", "diamond_leggings", "diamond_pickaxe", "diamond_shovel", "diamond_sword", "dragon_breath", "dried_kelp", "dye", "egg", "elytra", "emerald", "emptymap", "enchanted_book", "end_crystal", "ender_eye", "ender_pearl", "experience_bottle", "eye_drop", "feather", "fermented_spider_eye", "fireball", "fireworks", "fireworkscharge", "fish", "fishing_rod", "flint", "flint_and_steel", "flower_pot", "frame", "ghast_tear", "glass_bottle", "glowstone_dust", "gold_ingot", "gold_nugget", "golden_apple", "golden_axe", "golden_boots", "golden_carrot", "golden_chestplate", "golden_helmet", "golden_hoe", "golden_leggings", "golden_pickaxe", "golden_shovel", "golden_sword", "gunpowder", "heart_of_the_sea", "hopper", "hopper_minecart", "horsearmordiamond", "horsearmorgold", "horsearmoriron", "horsearmorleather", "ice_bomb", "iron_axe", "iron_boots", "iron_chestplate", "iron_door", "iron_helmet", "iron_hoe", "iron_ingot", "iron_leggings", "iron_nugget", "iron_pickaxe", "iron_shovel", "iron_sword", "jungle_door", "kelp", "lead", "leather", "leather_boots", "leather_chestplate", "leather_helmet", "leather_leggings", "lingering_potion", "magma_cream", "map_filled", "melon", "melon_seeds", "minecart", "mushroom_stew", "muttoncooked", "muttonraw", "nametag", "nautilus_shell", "nether_wart", "netherbrick", "netherstar", "painting", "paper", "phantom_membrane", "poisonous_potato", "porkchop", "portfolio", "potato", "potion", "prismarine_crystals", "prismarine_shard", "pufferfish", "pumpkin_pie", "pumpkin_seeds", "quartz", "rabbit", "rabbit_foot", "rabbit_hide", "rabbit_stew", "record_11", "record_13", "record_blocks", "record_cat", "record_chirp", "record_far", "record_mall", "record_mellohi", "record_stal", "record_strad", "record_wait", "record_ward", "redstone", "reeds", "repeater", "rotten_flesh", "saddle", "salmon", "shears", "shulker_shell", "sign", "skull", "slimeball", "snowball", "sparkler", "spawn_egg", "speckled_melon", "spider_eye", "splash_potion", "spruce_door", "stick", "stone_axe", "stone_hoe", "stone_pickaxe", "stone_shovel", "stone_sword", "string", "sugar", "super_fertilizer", "tnt_minecart", "totem", "trident", "turtle_helmet", "turtle_shell_piece", "wheat", "wheat_seeds", "wooden_axe", "wooden_door", "wooden_hoe", "wooden_pickaxe", "wooden_shovel", "wooden_sword", "writable_book", "written_book"];
    }
}