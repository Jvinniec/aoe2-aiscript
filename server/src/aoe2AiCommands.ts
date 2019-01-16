export const aoe2commands = {
    "aic": [
    {
        "name": "up-compare-goal",
        "description": "Perform a comparison with a goal variable.",
        "version": {
            "min":"1.0c",
            "max":""
        },
        "note": "",
        "section": "Fact",
        "param": [ {
                "name": "Id",
                "type": "Goal",
                "dir": "in",
                "range": "a GoalId",
                "note": "The goal that will be compared."
            }, {
                "op": "compare"
            }, {
                "name": "Value",
                "type": "Op",
                "dir": "in",
                "range": "-32768 to 32767",
                "note": "A number for comparison."
            } 
        ],
        "example": [ {
            "title": "Check if the goal named &quot;gl-sheep-total&quot; stores a value &lt; 4.",
            "data": "(defconst gl-sheep-total 101)\r\n(defrule\r\n\t(up-compare-goal gl-sheep-total &lt; 4)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-compare-sn",
        "description": "Perform a comparison with a strategic number.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "Id",
            "type": "Sn",
            "dir": "in",
            "range": "an SnId",
            "note": "The strategic number that will be compared."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if the strategic number named &quot;sn-maximum-town-size&quot; &gt; 40.",
            "data": "(defrule\r\n\t(up-compare-sn sn-maximum-town-size &gt; 40)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-compare-const",
        "description": "Perform a comparison with a constant value.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "Id",
            "type": "Const",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The constant that will be compared."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if the const named &quot;feudal-villagers&quot; &gt;= 20.",
            "data": "(defconst feudal-villagers 30)\r\n(defrule\r\n\t(up-compare-const feudal-villagers &gt;= 20)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-resource-amount",
        "description": "Perform a comparison with an internal resource value.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "ResourceAmount",
            "type": "Const",
            "dir": "in",
            "range": "a const from the ResourceAmount enumeration",
            "note": "The resource that will be compared."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if the AI is holding at least 1 relic.",
            "data": "(defrule\r\n\t(up-resource-amount amount-relics &gt;= 1)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-resource-percent",
        "description": "Perform a comparison with an internal resource value * 100.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "ResourceAmount",
            "type": "Const",
            "dir": "in",
            "range": "a const from the ResourceAmount enumeration",
            "note": "The resource that will be compared."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check amount-tribute-inefficiency to see if coinage has been researched.",
            "data": "(defrule\r\n\t(up-resource-percent amount-tribute-inefficiency &lt; 30)\r\n=&gt;\r\n\t(chat-to-all &quot;Coinage has been researched.&quot;)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-allied-resource-amount",
        "description": "Perform a comparison with an ally's internal resource value.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "Ally",
            "type": "Player",
            "dir": "in",
            "range": "a PlayerId for: self, ally",
            "note": "The player(s) to check."
        }, {
            "name": "ResourceAmount",
            "type": "Const",
            "dir": "in",
            "range": "a const from the ResourceAmount enumeration",
            "note": "The resource that will be compared."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if any ally's food &lt; 50.",
            "data": "(defrule\r\n\t(up-allied-resource-amount any-ally food &lt; 50)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-allied-resource-percent",
        "description": "Perform a comparison with an ally's internal resource value * 100.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "Ally",
            "type": "Player",
            "dir": "in",
            "range": "a PlayerId for: self, ally",
            "note": "The player(s) to check."
        }, {
            "name": "ResourceAmount",
            "type": "Const",
            "dir": "in",
            "range": "a const from the ResourceAmount enumeration",
            "note": "The resource that will be compared."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check amount-tribute-inefficiency to see if coinage has been researched by an ally.",
            "data": "(defrule\r\n\t(up-allied-resource-percent any-ally amount-tribute-inefficiency &lt; 30)\r\n=&gt;\r\n\t(chat-to-all &quot;Coinage has been researched by an ally.&quot;)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-allied-goal",
        "description": "Perform a comparison with an allied AI's goal variable.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "ComputerAlly",
            "type": "Player",
            "dir": "in",
            "range": "a PlayerId for: self, computer-ally",
            "note": "The player(s) to check."
        }, {
            "name": "Id",
            "type": "Goal",
            "dir": "in",
            "range": "a GoalId",
            "note": "The goal that will be compared."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if any ally has a goal with the same id as &quot;gl-sheep-total&quot; that stores a value &gt; 6.",
            "data": "(defconst gl-sheep-total 101)\r\n(defrule\r\n\t(up-allied-goal any-ally gl-sheep-total &gt; 6)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-allied-sn",
        "description": "Perform a comparison with an allied AI's strategic number.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "ComputerAlly",
            "type": "Player",
            "dir": "in",
            "range": "a PlayerId for: self, computer-ally",
            "note": "The player(s) to check."
        }, {
            "name": "Id",
            "type": "Sn",
            "dir": "in",
            "range": "an SnId",
            "note": "The strategic number that will be compared."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if any ally has &quot;sn-maximum-town-size&quot; &gt;= 30.",
            "data": "(defrule\r\n\t(up-allied-sn any-ally sn-maximum-town-size &gt;= 30)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-can-research",
        "description": "Check if a technology can be researched with dynamic values.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "EscrowState",
            "type": "Goal",
            "dir": "in",
            "range": "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
            "note": "Determines whether escrowed resources are considered."
        }, {
            "op": "type"
        }, {
            "name": "TechId",
            "type": "Op",
            "dir": "in",
            "range": "a TechId",
            "note": "The technology that will be checked."
        } ],
        "example": [ {
            "title": "Check if fletching can be researched without escrowed resources.",
            "data": "(defrule\r\n\t(up-can-research 0 c: ri-fletching)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-can-train",
        "description": "Check if a unit can be trained with dynamic values.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "EscrowState",
            "type": "Goal",
            "dir": "in",
            "range": "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
            "note": "Determines whether escrowed resources are considered."
        }, {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The unit that will be checked."
        } ],
        "example": [ {
            "title": "Check if spearman-line can be trained with escrowed resources, using a goal.",
            "data": "(defconst gl-escrow-state 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-goal gl-escrow-state with-escrow)\r\n\t(disable-self)\r\n)\r\n(defrule\r\n\t(up-can-train gl-escrow-state c: spearman-line)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-can-build",
        "description": "Check if a building can be constructed with dynamic values.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "EscrowState",
            "type": "Goal",
            "dir": "in",
            "range": "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
            "note": "Determines whether escrowed resources are considered."
        }, {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The building that will be checked."
        } ],
        "example": [ {
            "title": "Check if an outpost can be built without escrowed resources.",
            "data": "(defrule\r\n\t(up-can-build 0 c: outpost)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-gaia-type-count",
        "description": "Check the current sighted resource count from gaia.",
        "note": "This command may be relatively slow, since it must check the status of all discovered resources within the requested subset (food, wood, stone, or gold).",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "Resource",
            "type": "Const",
            "dir": "in",
            "range": "food, wood, stone, gold, or the UnitId of the resource",
            "note": "The resource to check."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if at least 4 sighted gold mines still exist.",
            "data": "(defrule\r\n\t(up-gaia-type-count c: gold &gt;= 4)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }, {
            "title": "Check if more than 6 sighted sheep or turkeys remain.",
            "data": "(defrule\r\n\t(up-gaia-type-count c: livestock-class &gt; 6) ; livestock-class = 958\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-gaia-type-count-total",
        "description": "Check the total sighted resource count from gaia.",
        "note": "When checking food, wood, stone, or gold, this command operates very quickly. However, the required data does not exist for specific food types, including deer and sheep. As a fallback, it will redirect to the slower up-gaia-type-count, and the result will only reflect resources that still exist.",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "Resource",
            "type": "Const",
            "dir": "in",
            "range": "food, wood, stone, gold, or the UnitId of the resource",
            "note": "The resource to check."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if the AI has discovered over 100 trees, which may or may not still exist.",
            "data": "(defrule\r\n\t(up-gaia-type-count-total c: wood &gt; 100)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }, {
            "title": "Check if less than 2 sighted deer remain (redirect to up-gaia-type-count).",
            "data": "(defrule\r\n\t(up-gaia-type-count-total c: deer &lt; 2)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-object-type-count",
        "description": "Combine unit-type-count and building-type-count checks.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "ObjectId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The object to check."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there are at least 10 existing villagers.",
            "data": "(defrule\r\n\t(up-object-type-count c: villager &gt;= 10)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-object-type-count-total",
        "description": "Combine unit-type-count-total and building-type-count-total checks.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "ObjectId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The object to check."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there are more than 20 existing + pending villagers.",
            "data": "(defrule\r\n\t(up-object-type-count-total c: villager &gt; 20)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-pending-objects",
        "description": "Perform a comparison with the pending count of an object.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "ObjectId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The object to check."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there is at least 1 house pending completion.",
            "data": "(defrule\r\n\t(up-pending-objects c: house &gt;= 1)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-pending-placement",
        "description": "Check if a specific type of building is waiting for placement.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The building to check."
        } ],
        "example": [ {
            "title": "Check if a barracks is waiting for placement on the map.",
            "data": "(defrule\r\n\t(up-pending-placement c: barracks)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-research-status",
        "description": "Check the research status of a specific technology.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "TechId",
            "type": "Op",
            "dir": "in",
            "range": "a TechId",
            "note": "The technology to check."
        }, {
            "op": "compare"
        }, {
            "name": "ResearchState",
            "type": "Op",
            "dir": "in",
            "range": "research-unavailable, research-available, research-pending, research-complete",
            "note": "The research status to compare with."
        } ],
        "example": [ {
            "title": "Check if loom is either being researched or already complete.",
            "data": "(defrule\r\n\t(up-research-status c: ri-loom &gt;= research-pending)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-timer-status",
        "description": "Check whether a timer is disabled, triggered, running, or a combination.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "TimerId",
            "type": "Const",
            "dir": "in",
            "range": "a TimerId",
            "note": "The timer to check."
        }, {
            "op": "compare"
        }, {
            "name": "TimerState",
            "type": "Op",
            "dir": "in",
            "range": "timer-disabled, timer-triggered, timer-running",
            "note": "The timer status to compare with."
        } ],
        "example": [ {
            "title": "Check if the specified timer is disabled or triggered.",
            "data": "(defconst tm-gathering 1)\r\n(defrule\r\n\t(up-timer-status tm-gathering &lt;= timer-triggered)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }, {
            "title": "Check if the specified timer is running.",
            "data": "(defconst tm-gathering 1)\r\n(defrule\r\n\t(up-timer-status tm-gathering == timer-running)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-player-distance",
        "description": "Check the distance in tiles to the nearest building of another player.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "a PlayerId for: any",
            "note": "The player(s) to check."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if player 3 is less than 50 tiles away.",
            "data": "(defrule\r\n\t(up-player-distance 3 &lt; 50)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }, {
            "title": "Check if the dynamic &quot;focus-player&quot; is within &quot;gl-distance&quot; tiles.",
            "data": "(defconst gl-distance 101)\r\n(defrule\r\n\t(up-player-distance focus-player g:&lt; gl-distance)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }, {
            "title": "Check if any enemy is within 40 tiles.",
            "data": "(defrule\r\n\t(up-player-distance any-enemy &lt; 40)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-players-in-game",
        "description": "Check the number of active players in the game of the specified stance.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "PlayerStance",
            "type": "Const",
            "dir": "in",
            "range": "any, ally, neutral, enemy",
            "note": "The stance of players to check."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there are at least 2 allies with the AI for a team of 3.",
            "data": "(defrule\r\n\t(up-players-in-game ally &gt;= 3)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-enemy-buildings-in-town",
        "description": "Check the number of targetable enemy buildings in town.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there is an enemy building inside sn-maximum-town-size.",
            "data": "(defrule\r\n\t(up-enemy-buildings-in-town &gt; 0)\r\n\t(enemy-buildings-in-town) ; this is equivalent\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-enemy-units-in-town",
        "description": "Check the number of targetable enemy units in town.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there are more than 5 enemy units, except villagers, inside sn-maximum-town-size.",
            "data": "(defrule\r\n\t(up-enemy-units-in-town &gt; 5)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-enemy-villagers-in-town",
        "description": "Check the number of targetable enemy villagers in town.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there are at least 2 enemy villagers inside sn-maximum-town-size.",
            "data": "(defrule\r\n\t(up-enemy-villagers-in-town &gt;= 2)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-defender-count",
        "description": "Check the number of units actively defending in town.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if the AI is actively defending its town with at least 10 units.",
            "data": "(defrule\r\n\t(up-defender-count &gt;= 10)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-projectile-detected",
        "description": "Check the elapsed time since a type of projectile was fired at the AI.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "ProjectileType",
            "type": "Const",
            "dir": "in",
            "range": "a const from the ProjectileType enumeration",
            "note": "The source of the projectile to check."
        }, {
            "op": "compare"
        }, {
            "name": "ElapsedTime",
            "type": "Op",
            "dir": "in",
            "range": "a valid integer",
            "note": "The time in milliseconds."
        } ],
        "example": [ {
            "title": "Check if an enemy town center has attacked within the last 2 seconds.",
            "data": "(defrule\r\n\t(up-projectile-detected projectile-town-center &lt; 2000)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-attacker-class",
        "description": "Check the class of the last enemy object to trigger town-under-attack.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "compare"
        }, {
            "name": "ClassId",
            "type": "Op",
            "dir": "in",
            "range": "900 to 999",
            "note": "The object class id to compare with."
        } ],
        "example": [ {
            "title": "Check if the town was last under attack by a ship.",
            "data": "(defrule\r\n\t(up-attacker-class == warship-class) ; warship-class = 922\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-modify-goal",
        "description": "Perform math operations on the value stored in a goal variable.",
        "note": "This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [ {
            "name": "Id",
            "type": "Goal",
            "dir": "io",
            "range": "a GoalId",
            "note": "The goal that will be modified."
        }, {
            "op": "math"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The number that will be used in the operation."
        } ],
        "example": [ {
            "title": "Add 1 to the value stored in &quot;gl-sheep-total&quot;.",
            "data": "(defconst gl-sheep-total 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-modify-goal gl-sheep-total c:+ 1)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-modify-sn",
        "description": "Perform math operations on a strategic number.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Id",
            "type": "Sn",
            "dir": "io",
            "range": "an SnId",
            "note": "The strategic number that will be modified."
        }, {
            "op": "math"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The number that will be used in the operation."
        } ],
        "example": [ {
            "title": "Subtract 2 from &quot;sn-maximum-town-size&quot;.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-modify-sn sn-maximum-town-size c:- 2)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-modify-escrow",
        "description": "Perform math operations to adjust escrowed resources.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Resource",
            "type": "Const",
            "dir": "in",
            "range": "food, wood, stone, gold",
            "note": "The escrowed resource that will be modified."
        }, {
            "op": "math"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The number that will be used in the operation."
        } ],
        "example": [ {
            "title": "Set the escrow-amount for food directly to 100.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-modify-escrow food c:= 100)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-release-escrow",
        "description": "Set all escrow amounts to 0 with a single command.",
        "note": "",
        "section": "Action",
        "param": [],
        "example": [ {
            "title": "Release all escrowed resources.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-release-escrow)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }



    , {
        "name": "up-setup-cost-data",
        "description": "Set the goals to store cost data for food, wood, stone, and gold.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "ResetCost",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "If set to 1, the values of the provided goal set will be reset to 0."
        }, {
            "name": "Id",
            "type": "Goal",
            "dir": "io",
            "range": "an extended GoalId from 41 to 508",
            "note": "The first of 4 consecutive goals to store cost data for food, wood, stone, and gold."
        } ],
        "example": [ {
            "title": "Set gl-cost-food, gl-cost-wood, gl-cost-stone, and gl-cost-gold to store cost data and initialize them to 0.",
            "data": "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-setup-cost-data 1 gl-cost-food)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-reset-cost-data",
        "description": "Reset 4 consecutive goals storing cost data to 0.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Id",
            "type": "Goal",
            "dir": "out",
            "range": "an extended GoalId from 41 to 508",
            "note": "The first of 4 consecutive goals that store cost data for food, wood, stone, and gold."
        } ],
        "example": [ {
            "title": "Reset gl-cost-food, gl-cost-wood, gl-cost-stone, and gl-cost-gold to 0.",
            "data": "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-cost-data gl-cost-food)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-add-object-cost",
        "description": "Add or subtract objects of a specific type to the current cost data.",
        "note": "",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "ObjectId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The object to operate upon."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The number of objects to add or subtract."
        } ],
        "example": [ {
            "title": "Add the cost of 4 spearmen to the current cost data represented by gl-cost-food, etc.",
            "data": "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-setup-cost-data 0 gl-cost-food)\r\n\t(up-add-object-cost c: spearman c: 4)\r\n\t(disable-self)\r\n)"
        }, {
            "title": "Add the cost of a town center (special exception).",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-add-object-cost c: town-center-foundation c: 1) ; town-center-foundation = 621\r\n\t;(up-add-object-cost c: town-center c: 1) ; error: this will not include the stone cost\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-add-research-cost",
        "description": "Add or subtract techs of a specific type to the current cost data.",
        "note": "",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "TechId",
            "type": "Op",
            "dir": "in",
            "range": "a TechId",
            "note": "The technology to operate upon."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The number of techs to add or subtract."
        } ],
        "example": [ {
            "title": "Subtract the cost of loom from the current cost data represented by gl-cost-food, etc.",
            "data": "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-setup-cost-data 0 gl-cost-food)\r\n\t(up-add-research-cost c: ri-loom c: -1)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-add-cost-data",
        "description": "Add or subtract another set of cost data to the current cost data.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Id",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 508",
            "note": "The first of 4 consecutive goals that store cost data for food, wood, stone, and gold."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The number of sets of the cost data to add or subtract."
        } ],
        "example": [ {
            "title": "Add 2 instances of the military cost data to the current cost data represented by gl-cost-food, etc.",
            "data": "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defconst gl-military-cost-food 111)\r\n(defconst gl-military-cost-wood 112)\r\n(defconst gl-military-cost-stone 113)\r\n(defconst gl-military-cost-gold 114)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-setup-cost-data 1 gl-military-cost-food)\r\n\t(up-add-object-cost c: knight-line c: 40)\r\n\t(up-setup-cost-data 1 gl-cost-food)\r\n\t(up-add-cost-data gl-military-cost-food c: 2)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-cost-delta",
        "description": "Get the difference between player resources and the current cost data.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Id",
            "type": "Goal",
            "dir": "out",
            "range": "an extended GoalId from 41 to 508",
            "note": "The first of 4 consecutive goals to store the cost delta for food, wood, stone, and gold."
        } ],
        "example": [ {
            "title": "Store the resource difference into the 4 goals starting with gl-delta-food.",
            "data": "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defconst gl-delta-food 121)\r\n(defconst gl-delta-wood 122)\r\n(defconst gl-delta-stone 123)\r\n(defconst gl-delta-gold 124)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-setup-cost-data 1 gl-cost-food)\r\n\t(up-add-object-cost c: archer-line c: 10)\r\n\t(up-get-cost-delta gl-delta-food)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-drop-resources",
        "description": "Request a drop by gatherers carrying a specific number of a resource.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Resource",
            "type": "Const",
            "dir": "in",
            "range": "food, wood, stone, gold, or the class id of the resource",
            "note": "The resource that will be dropped."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "0 to 32767",
            "note": "The minimum carried resources for a gatherer to drop."
        } ],
        "example": [ {
            "title": "Get all food gatherers carrying at least 15F to drop their resources.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-drop-resources food c: 15)\r\n\t(disable-self)\r\n)"
        }, {
            "title": "Get all farmers carrying at least 5F to drop their resources.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-drop-resources farm-class c: 5) ; farm-class = 949\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-retask-gatherers",
        "description": "Retask a specific number of villagers gathering from a resource.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Resource",
            "type": "Const",
            "dir": "in",
            "range": "food, wood, stone, gold, or the class id of the resource",
            "note": "The resource that will be dropped."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "0 to 32767",
            "note": "The maximum number of gatherers to retask."
        } ],
        "example": [ {
            "title": "Request up to 3 lumberjacks to attempt to retask.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-retask-gatherers wood c: 3)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-request-hunters",
        "description": "Attempt to request support hunters for the active boar lure.",
        "note": "This only applies to boars that are lured with strategic numbers (not Direct Unit Control). It is not guaranteed to reach the total number of requested hunters.",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "0 to 32767",
            "note": "The total number of hunters for the AI."
        } ],
        "example": [ {
            "title": "Request a total of 4 hunters to support the current lure.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-request-hunters c: 4)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-research",
        "description": "Add a technology to the research queue with dynamic values.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "EscrowState",
            "type": "Goal",
            "dir": "in",
            "range": "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
            "note": "Determines whether escrowed resources are considered."
        }, {
            "op": "type"
        }, {
            "name": "TechId",
            "type": "Op",
            "dir": "in",
            "range": "a TechId",
            "note": "The technology that will be researched."
        } ],
        "example": [ {
            "title": "Research fletching without escrowed resources.",
            "data": "(defrule\r\n\t(up-can-research 0 c: ri-fletching)\r\n=&gt;\r\n\t(up-research 0 c: ri-fletching)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-train",
        "description": "Add a unit to the training queue with dynamic values.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "EscrowState",
            "type": "Goal",
            "dir": "in",
            "range": "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
            "note": "Determines whether escrowed resources are considered."
        }, {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The unit that will be trained."
        } ],
        "example": [ {
            "title": "Train spearman-line with escrowed resources, using a goal.",
            "data": "(defconst gl-escrow-state 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-goal gl-escrow-state with-escrow)\r\n\t(disable-self)\r\n)\r\n(defrule\r\n\t(up-can-train gl-escrow-state c: spearman-line)\r\n=&gt;\r\n\t(up-train gl-escrow-state c: spearman-line)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-build",
        "description": "Add a building to the construction queue with dynamic values.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "PlacementType",
            "type": "Const",
            "dir": "in",
            "range": "place-normal, place-forward, place-control, place-point",
            "note": "The type of placement. Execute up-set-placement-data before using place-control."
        }, {
            "name": "EscrowState",
            "type": "Goal",
            "dir": "in",
            "range": "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
            "note": "Determines whether escrowed resources are considered."
        }, {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The building that will be constructed."
        } ],
        "example": [ {
            "title": "Build an outpost without escrowed resources.",
            "data": "(defrule\r\n\t(up-can-build 0 c: outpost)\r\n=&gt;\r\n\t(up-build place-normal 0 c: outpost)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-assign-builders",
        "description": "Assign a specific number of builders to a building type or class.",
        "note": "",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The building to modify."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-1 to 250",
            "note": "The number of builders to assign or -1 to disable sending additional builders."
        } ],
        "example": [ {
            "title": "Assign at least 2 builders for houses (not per house).",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-assign-builders c: house c: 2)\r\n\t(disable-self)\r\n)"
        }, {
            "title": "Assign at least 4 builders for town centers (special exception).",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-assign-builders c: town-center-foundation c: 4) ; town-center-foundation = 621\r\n\t;(up-assign-builders c: town-center c: 4) ; error: this will not work\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-idle-unit-count",
        "description": "Check the number of idle units for the specified type.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "IdleType",
            "type": "Const",
            "dir": "in",
            "range": "a const from the IdleType enumeration",
            "note": "The type of units that will be checked."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there are more than 5 idle villagers.",
            "data": "(defrule\r\n\t(up-idle-unit-count idle-type-villager > 5)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-delete-idle-units",
        "description": "Delete all idle units of the specified type.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "IdleType",
            "type": "Const",
            "dir": "in",
            "range": "a const from the IdleType enumeration",
            "note": "The type of units that will be deleted."
        } ],
        "example": [ {
            "title": "Delete all idle villagers.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-delete-idle-units idle-type-villager)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-delete-objects",
        "description": "Delete all objects with less than the specified hitpoints.",
        "note": "",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The unit type that will be deleted."
        }, {
            "op": "type"
        }, {
            "name": "Hitpoints",
            "type": "Op",
            "dir": "in",
            "range": "0 to 32767",
            "note": "Units with less than this number of HP will be deleted."
        } ],
        "example": [ {
            "title": "Delete all walls owned by the player.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-delete-objects c: wall-class c: 32767) ; wall-class = 927\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-delete-distant-farms",
        "description": "Delete all farms that exist outside the specified drop distance.",
        "note": "",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "0 to 255",
            "note": "The drop distance at which to begin deleting farms."
        } ],
        "example": [ {
            "title": "Delete farms where the &quot;dropsite-min-distance&quot; > 8.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-delete-distant-farms c: 8)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-set-placement-data",
        "description": "Specify placement information for managed construction.",
        "note": "Please ensure Player has at least a town-center to use for reference, if they don't have ObjectId. If Player has no objects left, placement will not work as expected.",
        "section": "Action",
        "param": [ {
            "name": "Ally",
            "type": "Player",
            "dir": "in",
            "range": "a single PlayerId for: self, this-any-ally",
            "note": "The player to focus upon."
        }, {
            "name": "ObjectId",
            "type": "Const",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The object that will be the focus for placement."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-254 to 254",
            "note": "The distance from the focus object to place using up-build + place-control. If a target enemy has been found, the distance shifts toward or away from the closest building of that target. Otherwise, the center of the map acts as the reference position."
        } ],
        "example": [ {
            "title": "Place 25 tiles behind the home town center.",
            "data": "(defrule\r\n\t(up-can-build 0 c: house)\r\n=&gt;\r\n\t(up-set-placement-data my-player-number -1 c: -25) ; home town center = -1\r\n\t(up-build place-control 0 c: house)\r\n)"
        }, {
            "title": "Place 2 tiles in front of the focus-player's latest lumber-camp.",
            "data": "(defrule\r\n\t(up-can-build 0 c: house)\r\n=&gt;\r\n\t(up-set-placement-data focus-player lumber-camp c: 2)\r\n\t(up-build place-control 0 c: house)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-reset-placement",
        "description": "Clear the placement list for the specified building type when blocked.",
        "note": "Please use with caution.",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The building type that will be reset."
        } ],
        "example": [ {
            "title": "Clear all pending barracks without a foundation.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-placement c: barracks)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-threat-data",
        "description": "Get the elapsed time, player, source, and target of the last threat.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "ElapsedTime",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the elapsed time."
        }, {
            "name": "PlayerId",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the PlayerId of the attacker."
        }, {
            "name": "SourceClass",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the class of the attacking object."
        }, {
            "name": "TargetClass",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the class of the target of the attack."
        } ],
        "example": [ {
            "title": "Store the latest threat information from anywhere on the map.",
            "data": "(defconst gl-threat-time 101)\r\n(defconst gl-threat-player 102)\r\n(defconst gl-threat-source 103)\r\n(defconst gl-threat-target 104)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-threat-data gl-threat-time gl-threat-player gl-threat-source gl-threat-target)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-projectile-player",
        "description": "Get the enemy player that last attacked with a specific type of projectile.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "ProjectileType",
            "type": "Const",
            "dir": "in",
            "range": "a const from the ProjectileType enumeration",
            "note": "The source of the projectile."
        }, {
            "name": "PlayerId",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the PlayerId of the attacker."
        } ],
        "example": [ {
            "title": "Store the last player to attack with castle arrows in gl-player.",
            "data": "(defconst gl-player 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-projectile-player projectile-castle gl-player)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-attacker-class",
        "description": "Get the class of the last enemy object to trigger town-under-attack.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "SourceClass",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the class of the attacking object."
        } ],
        "example": [ {
            "title": "Store the class of the attacking object in gl-class.",
            "data": "(defconst gl-class 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-attacker-class gl-class)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-victory-data",
        "description": "Get standard victory status information into the provided goals.",
        "note": "",
        "section": "Action",
        "param": [{
            "name": "PlayerId",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the PlayerId of the player approaching victory, or 0 if invalid."
        }, {
            "name": "type",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores one of the following: relic, wonder, monument, or 0 if invalid."
        }, {
            "name": "Time",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores 10 * the game years remaining until victory, or -1 if invalid."
        }],
        "example": [{
            "title": "Store current victory data into the provided goals.",
            "data": "(defconst gl-victory-player 101)\r\n(defconst gl-victory-type 102)\r\n(defconst gl-victory-time 103)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-victory-data gl-victory-player gl-victory-type gl-victory-time)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-victory-limit",
        "description": "Get the time or score victory limit into the provided goal.",
        "note": "",
        "section": "Action",
        "param": [{
            "name": "Limit",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores 10 * the remaining game years for time victory, the target amount for score victory, or -1 if invalid."
        }],
        "example": [{
            "title": "Store the current victory limit.",
            "data": "(defconst gl-victory-limit 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-victory-limit gl-victory-limit)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-find-player",
        "description": "Find the first active player based on the provided information.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "PlayerStance",
            "type": "Const",
            "dir": "in",
            "range": "any, ally, neutral, enemy",
            "note": "The stance of the player to find."
        }, {
            "name": "FindPlayerMethod",
            "type": "Const",
            "dir": "in",
            "range": "find-attacker, find-random, find-closest, find-ordered",
            "note": "The search method."
        }, {
            "name": "PlayerId",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the PlayerId of the match."
        } ],
        "example": [ {
            "title": "Store the closest enemy player into gl-player.",
            "data": "(defconst gl-player 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-find-player enemy find-closest gl-player)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-find-next-player",
        "description": "Find the next active player based on the provided information.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "PlayerStance",
            "type": "Const",
            "dir": "in",
            "range": "any, ally, neutral, enemy",
            "note": "The stance of the player to find."
        }, {
            "name": "FindPlayerMethod",
            "type": "Const",
            "dir": "in",
            "range": "find-attacker, find-random, find-closest, find-ordered",
            "note": "The search method."
        }, {
            "name": "PlayerId",
            "type": "Goal",
            "dir": "io",
            "range": "a GoalId",
            "note": "Stores the PlayerId of the match, while providing the basis to begin the search."
        } ],
        "example": [ {
            "title": "Store the second closest enemy player into gl-player.",
            "data": "(defconst gl-player 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-find-player enemy find-closest gl-player)\r\n\t(up-find-next-player enemy find-closest gl-player)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-fact",
        "description": "Read a fact for my-player-number into a goal.",
        "note": "This command can be used as either a fact or an action.",
        "section": "Action",
        "param": [ {
            "name": "FactId",
            "type": "Const",
            "dir": "in",
            "range": "a const from the FactId enumeration",
            "note": "The fact to query."
        }, {
            "name": "Param",
            "type": "Const",
            "dir": "in",
            "range": "an appropriate parameter for the fact, or 0 if not required",
            "note": "A parameter for the fact."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the result of the fact."
        } ],
        "example": [ {
            "title": "Store the military-population value into gl-data.",
            "data": "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-fact military-population 0 gl-data)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-target-fact",
        "description": "Read a fact for the target-player into a goal.",
        "note": "This command can be used as either a fact or an action.",
        "section": "Action",
        "param": [ {
            "name": "FactId",
            "type": "Const",
            "dir": "in",
            "range": "a const from the FactId enumeration",
            "note": "The fact to query."
        }, {
            "name": "Param",
            "type": "Const",
            "dir": "in",
            "range": "an appropriate parameter for the fact, or 0 if not required",
            "note": "A parameter for the fact."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the result of the fact."
        } ],
        "example": [ {
            "title": "Store the target military-population value into gl-data.",
            "data": "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-target-fact military-population 0 gl-data)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-focus-fact",
        "description": "Read a fact for the focus-player into a goal.",
        "note": "This command can be used as either a fact or an action.",
        "section": "Action",
        "param": [ {
            "name": "FactId",
            "type": "Const",
            "dir": "in",
            "range": "a const from the FactId enumeration",
            "note": "The fact to query."
        }, {
            "name": "Param",
            "type": "Const",
            "dir": "in",
            "range": "an appropriate parameter for the fact, or 0 if not required",
            "note": "A parameter for the fact."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the result of the fact."
        } ],
        "example": [ {
            "title": "Store the focus population value into gl-data.",
            "data": "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-focus-fact population 0 gl-data)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-player-fact",
        "description": "Read a fact for a specific player into a goal.",
        "note": "This command can be used as either a fact or an action. For better performance, please use one of the more direct commands from the up-get-fact series whenever possible.",
        "section": "Action",
        "param": [ {
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "a single PlayerId for: self, this-any",
            "note": "The player to check."
        }, {
            "name": "FactId",
            "type": "Const",
            "dir": "in",
            "range": "a const from the FactId enumeration",
            "note": "The fact to query."
        }, {
            "name": "Param",
            "type": "Const",
            "dir": "in",
            "range": "an appropriate parameter for the fact, or 0 if not required",
            "note": "A parameter for the fact."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the result of the fact."
        } ],
        "example": [ {
            "title": "Store the civilian-population value for player 2 into gl-data.",
            "data": "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-player-fact 2 civilian-population 0 gl-data)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-fact-sum",
        "description": "Read the sum of facts for specific players into a goal.",
        "note": "This command can be used as either a fact or an action.",
        "section": "Action",
        "param": [ {
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "only an any-* wildcard PlayerId",
            "note": "The player to check."
        }, {
            "name": "FactId",
            "type": "Const",
            "dir": "in",
            "range": "a const from the FactId enumeration",
            "note": "The fact to query."
        }, {
            "name": "Param",
            "type": "Const",
            "dir": "in",
            "range": "an appropriate parameter for the fact, or 0 if not required",
            "note": "A parameter for the fact."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the sum of the facts."
        } ],
        "example": [ {
            "title": "Store the sum of enemy military-population values into gl-data.",
            "data": "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-fact-sum any-enemy military-population 0 gl-data)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-fact-min",
        "description": "Read the minimum value of the facts for specific players into a goal.",
        "note": "This command can be used as either a fact or an action. The matching player will be set to the this-any-* wildcard player id for use in the action section of the rule.",
        "section": "Action",
        "param": [ {
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "only an any-* wildcard PlayerId",
            "note": "The player to check."
        }, {
            "name": "FactId",
            "type": "Const",
            "dir": "in",
            "range": "a const from the FactId enumeration",
            "note": "The fact to query."
        }, {
            "name": "Param",
            "type": "Const",
            "dir": "in",
            "range": "an appropriate parameter for the fact, or 0 if not required",
            "note": "A parameter for the fact."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the minimum value of the facts."
        } ],
        "example": [ {
            "title": "Store the minimum enemy score into gl-data.",
            "data": "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-fact-min any-enemy current-score 0 gl-data)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-fact-max",
        "description": "Read the maximum value of the facts for specific players into a goal.",
        "note": "This command can be used as either a fact or an action. The matching player will be set to the this-any-* wildcard player id for use in the action section of the rule.",
        "section": "Action",
        "param": [ {
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "only an any-* wildcard PlayerId",
            "note": "The player to check."
        }, {
            "name": "FactId",
            "type": "Const",
            "dir": "in",
            "range": "a const from the FactId enumeration",
            "note": "The fact to query."
        }, {
            "name": "Param",
            "type": "Const",
            "dir": "in",
            "range": "an appropriate parameter for the fact, or 0 if not required",
            "note": "A parameter for the fact."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the maximum value of the facts."
        } ],
        "example": [ {
            "title": "Store the maximum ally score into gl-data.",
            "data": "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-fact-max any-ally current-score 0 gl-data)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-guard-unit",
        "description": "Set a single unit of a specific type to protect a random instance of another.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "ObjectId",
            "type": "Const",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The object that will be guarded."
        }, {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The type of unit that will guard."
        } ],
        "example": [ {
            "title": "Set a single spearman to guard a random monk.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-guard-unit monk c: spearman-line)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-reset-unit",
        "description": "Halt the activity of all units of a specific type.",
        "note": "This is equivalent to clicking the &quot;stop&quot; button.",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The type of unit that will be stopped."
        } ],
        "example": [ {
            "title": "Stop all spearmen on the map.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-unit c: spearman-line)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-reset-building",
        "description": "Halt the activity and research of all buildings of a specific type.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "PreserveResearch",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "If set to 1, buildings performing research will not be affected."
        }, {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The type of building that will be reset."
        } ],
        "example": [ {
            "title": "Reset all activity at town centers, except those performing research.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-building 1 c: town-center)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-reset-scouts",
        "description": "Halt and disband all soldier explore groups on land.",
        "note": "",
        "section": "Action",
        "param": [],
        "example": [ {
            "title": "Stop all scouts on land, after configuring the necessary strategic numbers.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-number-explore-groups 0)\r\n\t(set-strategic-number sn-total-number-explorers 0)\r\n\t(up-reset-scouts)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-send-scout",
        "description": "Send a land or water scout to a specific location.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "GroupType",
            "type": "Const",
            "dir": "in",
            "range": "a const from the GroupType enumeration",
            "note": "The type of explore group that will be tasked."
        }, {
            "name": "PositionType",
            "type": "Const",
            "dir": "in",
            "range": "a member of the PositionType enumeration",
            "note": "The scouting method."
        } ],
        "example": [ {
            "title": "Send a land scout to the opposite side of the map.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-send-scout group-type-land-explore scout-opposite)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-disband-group-type",
        "description": "Disband all internal groups of the specified type.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "GroupType",
            "type": "Const",
            "dir": "in",
            "range": "a const from the GroupType enumeration",
            "note": "The type of groups that will be disbanded."
        } ],
        "example": [ {
            "title": "Stop all land explore groups in a more direct manner.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-number-explore-groups 0)\r\n\t(set-strategic-number sn-total-number-explorers 0)\r\n\t(up-disband-group-type group-type-land-explore)\r\n\t(up-reset-unit c: all-units-class)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-set-attack-stance",
        "description": "Set the attack stance for all units of a specific type.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "UnitId",
            "type": "Const",
            "dir": "in",
            "range": "a UnitId",
            "note": "The unit that will be modified."
        }, {
            "op": "type"
        }, {
            "name": "AttackStance",
            "type": "Op",
            "dir": "in",
            "range": "stance-aggressive, stance-defensive, stance-stand-ground, stance-no-attack",
            "note": "The new attack stance for the specified units."
        } ],
        "example": [ {
            "title": "Set all spearmen to the &quot;stand-ground&quot; stance.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-attack-stance spearman-line c: stance-stand-ground)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-set-defense-priority",
        "description": "Set the defensive (TSA) targeting priority for a building.",
        "note": "This has no effect against units.",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The building that will be modified."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-1 to 32767, where -1 is the lowest priority",
            "note": "The priority to use with the defensive targeting system."
        } ],
        "example": [ {
            "title": "Increase the defensive priority for lumber camps to 1000.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-defense-priority c: lumber-camp c: 1000)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-set-offense-priority",
        "description": "Set the offensive targeting priority for an object.",
        "note": "",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "ObjectId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The object that will be modified."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-1 to 11, where -1 is the lowest priority",
            "note": "The priority to use with the offensive targeting system."
        } ],
        "example": [ {
            "title": "Increase the offensive priority for mining camps to 11.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-offense-priority c: mining-camp c: 11)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-reset-target-priorities",
        "description": "Reset or clear offensive or defensive targeting priorities.",
        "note": "Restore default priorities with 0. For defensive priorities, setting Mode to 1 will reset all to -1. For offensive priorities, unit types will be reset to 0, while classes will be -1.",
        "section": "Action",
        "param": [ {
            "name": "PriorityType",
            "type": "Const",
            "dir": "in",
            "range": "priority-offense, priority-defense",
            "note": "The targeting priority type to modify."
        }, {
            "name": "Mode",
            "type": "Const",
            "dir": "in",
            "range": "0 to 1",
            "note": "Determines the reset method."
        } ],
        "example": [ {
            "title": "Reset defensive priorities to default values.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-target-priorities priority-defense 0)\r\n\t(disable-self)\r\n)"
        }, {
            "title": "Clear all offensive priorities (nothing has priority).",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-target-priorities priority-offense 1)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-retreat-to",
        "description": "Retreat all units of a specific type to a random instance of another.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "ObjectId",
            "type": "Const",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The object that will be gather point of the retreat."
        }, {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The type of units that will retreat."
        } ],
        "example": [ {
            "title": "Retreat all knights to a random castle, if possible.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-retreat-to castle c: knight-line)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-update-targets",
        "description": "Perform an immediate update for objects in town size.",
        "note": "",
        "section": "Action",
        "param": [],
        "example": [ {
            "title": "Retreat to the home town center after reducing town size.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-maximum-town-size 15)\r\n\t(up-update-targets)\r\n\t(up-retreat-now)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-retreat-now",
        "description": "Retreat all military units to the home town center.",
        "note": "",
        "section": "Action",
        "param": [],
        "example": [ {
            "title": "Retreat to the home town center.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-retreat-now)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-reset-attack-now",
        "description": "Reset the infinite targeting loop flag set by attack-now.",
        "note": "",
        "section": "Action",
        "param": [],
        "example": [ {
            "title": "Unset the attack-now flag for active groups.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-attack-now)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-chat-data-to-self",
        "description": "Send a chat message with a formatted value locally.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Format",
            "type": "Text",
            "dir": "in",
            "range": "quoted text, where %d is replaced by the provided value",
            "note": "A formatted quote of text that will be sent as a chat message."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The value that will replace %d in the format string of text."
        } ],
        "example": [ {
            "title": "Chat &quot;Food: 5.&quot; to self.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-chat-data-to-self &quot;Food: %d.&quot; c: 5)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-chat-data-to-player",
        "description": "Send a chat message with a formatted value to a player.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "a PlayerId for: self, any, every",
            "note": "The player(s) that will receive the message."
        }, {
            "name": "Format",
            "type": "Text",
            "dir": "in",
            "range": "quoted text, where %d is replaced by the provided value",
            "note": "A formatted quote of text that will be sent as a chat message."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The value that will replace %d in the format string of text."
        } ],
        "example": [ {
            "title": "Tell every ally know who the current target player is.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-chat-data-to-player every-ally &quot;The target is player %d.&quot; s: sn-target-player-number)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-chat-data-to-all",
        "description": "Send a chat message with a formatted value to everyone.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Format",
            "type": "Text",
            "dir": "in",
            "range": "quoted text, where %d is replaced by the provided value",
            "note": "A formatted quote of text that will be sent as a chat message."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The value that will replace %d in the format string of text."
        } ],
        "example": [ {
            "title": "Tell everyone what your player number is.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-chat-data-to-all &quot;I am player %d.&quot; c: my-player-number)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-cc-send-cheat",
        "description": "Send a message in order to execute a cheat code.",
        "note": "Cheats must be enabled for this to take effect.",
        "section": "Action",
        "param": [ {
            "name": "Code",
            "type": "Text",
            "dir": "in",
            "range": "quoted text",
            "note": "This must be a valid cheat code."
        } ],
        "example": [ {
            "title": "Create a saboteur unit using the &quot;to smithereens&quot; cheat code.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-cc-send-cheat &quot;to smithereens&quot;)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-remaining-boar-amount",
        "description": "Check the amount of food remaining on the current boar.",
        "note": "This data is only valid if the boar is lured with strategic numbers (not Direct Unit Control), while another boar is targetable and available to hunt. If this is not the case, it remains invalid (65535) to signify that this is the final boar.",
        "section": "Fact",
        "param": [ {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there is less than 210 food remaining on the boar, while another boar exists.",
            "data": "(defrule\r\n\t(up-remaining-boar-amount &lt; 210) ; will be 65535 if invalid\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-gather-inside",
        "description": "Set all existing buildings of a specific type to hold units inside.",
        "note": "",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The type of building that will be modified."
        }, {
            "op": "type"
        }, {
            "name": "State",
            "type": "Op",
            "dir": "in",
            "range": "0, 1, or -1",
            "note": "If set to 1, both trained and garrisoned units will be held inside the building. If set to -1, only garrisoned units will be held inside. Otherwise, all units will be released as usual."
        } ],
        "example": [ {
            "title": "Set existing docks to keep ships inside while training, then release them once the AI has 10 warships.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-gather-inside c: dock c: 1)\r\n\t(disable-self)\r\n)\r\n(defrule\r\n\t(unit-type-count warship-class &gt;= 10) ; warship-class = 922\r\n=&gt;\r\n\t(up-gather-inside c: dock c: 0)\r\n)"
        }, {
            "title": "Prevent existing town centers from releasing garrisoned units, but allow villagers to be trained.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-gather-inside c: town-center c: -1)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-ungarrison",
        "description": "Request all objects of the specified type to ungarrison units.",
        "note": "",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "ObjectId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The type of object that will release garrisoned units."
        } ],
        "example": [ {
            "title": "Release all garrisoned units in docks.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-ungarrison c: dock)\r\n\t(disable-self)\r\n)"
        }, {
            "title": "Release all garrisoned units in battering rams.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-ungarrison c: battering-ram-line)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-garrison",
        "description": "Garrison all units of the specified type into another object.",
        "note": "The first parameter cannot be a class or a unit-line. It must be a valid root object type id that can accept a garrison (battering-ram instead of battering-ram-line).",
        "section": "Action",
        "param": [ {
            "name": "ObjectId",
            "type": "Const",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The type of object that will hold the units."
        }, {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The type of unit that will be garrisoned."
        } ],
        "example": [ {
            "title": "Garrison all available infantry into battering rams.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-garrison battering-ram c: infantry-class) ; infantry-class = 906\r\n\t(disable-self)\r\n)"
        }, {
            "title": "Garrison all available archers into towers.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-garrison watch-tower c: archer-line)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-projectile-target",
        "description": "Check the class of the target of a projectile that was fired at the AI.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "ProjectileType",
            "type": "Const",
            "dir": "in",
            "range": "a const from the ProjectileType enumeration",
            "note": "The source of the projectile to check."
        }, {
            "op": "compare"
        }, {
            "name": "ClassId",
            "type": "Op",
            "dir": "in",
            "range": "a ClassId",
            "note": "The class of the object that was targeted."
        } ],
        "example": [ {
            "title": "Check if an enemy town center has attacked an archery-class unit within the last 2 seconds.",
            "data": "(defrule\r\n\t(up-projectile-detected projectile-town-center &lt; 2000)\r\n\t(up-projectile-target projectile-town-center == archery-class) ; archery-class = 900\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-change-name",
        "description": "Change the name of the AI during gameplay.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "NewName",
            "type": "Text",
            "dir": "in",
            "range": "quoted text, no longer than 24 characters",
            "note": "A formatted quote of text that will be the new name."
        } ],
        "example": [ {
            "title": "Change the name of the AI to &quot;William Wallace&quot;.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-change-name &quot;William Wallace&quot;)\r\n\t(disable-self)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-building-type-in-town",
        "description": "Check the number of a specific enemy building type in town.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The type of building that will be checked."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there is a targetable enemy barracks inside sn-maximum-town-size.",
            "data": "(defrule\r\n\t(up-building-type-in-town c: barracks &gt; 0)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-unit-type-in-town",
        "description": "Check the number of a specific enemy unit type in town.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The type of unit that will be checked."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there is an enemy knight inside sn-maximum-town-size.",
            "data": "(defrule\r\n\t(up-unit-type-in-town c: knight-line &gt; 0)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-villager-type-in-town",
        "description": "Check the number of a specific enemy villager type in town.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The type of villager that will be checked."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if there is a targetable enemy gold miner inside sn-maximum-town-size.",
            "data": "(defrule\r\n\t(or\r\n\t\t(up-villager-type-in-town c: gold-miner-m &gt; 0) ; gold-miner-m = 579\r\n\t\t(up-villager-type-in-town c: gold-miner-f &gt; 0) ; gold-miner-f = 581\r\n\t)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-train-site-ready",
        "description": "Check if a unit's training site is ready and available.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The type of unit that will be checked."
        } ],
        "example": [ {
            "title": "Check if a dock is ready to train a fishing ship.",
            "data": "(defrule\r\n\t(up-train-site-ready c: fishing-ship)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-jump-rule",
        "description": "Jump forward or backward within the current rule set.",
        "note": "Never use this command where #load blocks may make your jump target unreliable. Please ensure that the rule you are jumping to actually exists. With this action, you can either decrease rules per pass with intelligent skips, or greatly increase it with loops. Please consider game performance.",
        "section": "Action",
        "param": [ {
            "name": "RuleDelta",
            "type": "Const",
            "dir": "in",
            "range": "the number of rules to jump",
            "note": "Positive values will jump forward, while negative values will jump backward."
        } ],
        "example": [ {
            "title": "Skip 1 rule if a condition is true.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-jump-rule 1)\r\n)\r\n(defrule ; this rule is skipped\r\n\t(true)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }, {
            "title": "Loop over a rule 3 times.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n\t=>\r\n\t(chat-local-to-self &quot;Start&quot;)\r\n\t(set-goal gl-value 0)\r\n)\r\n(defrule\r\n\t(up-compare-goal gl-value < 3)\r\n\t=>\r\n\t(up-modify-goal gl-value c:+ 1)\r\n\t(up-jump-rule -1)\r\n)"
        } ],
        "related": []
    }

    , {
        "name": "up-get-point",
        "description": "Read a specific (x,y) position into an extended goal pair.",
        "note": "This command writes to 2 consecutive goals and requires an extended goal pair between 41 and 510. If it fails to get a valid position, it will return (-1,-1).",
        "section": "Action",
        "param": [ {
            "name": "PositionType",
            "type": "Const",
            "dir": "in",
            "range": "a member of the PositionType enumeration",
            "note": "The position to read."
        }, {
            "name": "Point",
            "type": "Goal",
            "dir": "out",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        } ],
        "example": [ {
            "title": "Get the position of the map center.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-point-x)\r\n)"
        }, {
            "title": "Get the position of the target player.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-target gl-point-x)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-add-point",
        "description": "Add or subtract two point goal pairs together.",
        "note": "A negative value for Count will result in subtraction. Set Point2 to 0 to use the point that is stored by up-set-target-point.",
        "section": "Action",
        "param": [ {
            "name": "Point1",
            "type": "Goal",
            "dir": "io",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        }, {
            "name": "Point2",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "type"
        }, {
            "name": "Count",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The number of Point2 instances to add. Point2 will be multiplied by this before adding. A negative value will result in subtraction."
        } ],
        "example": [ {
            "title": "Add the positions of the focus and target players together.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-other-x 200)\r\n(defconst gl-other-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-focus gl-point-x)\r\n\t(up-get-point position-target gl-other-x)\r\n\t(up-add-point gl-point-x gl-other-x c: 1)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-lerp-percent",
        "description": "Interpolate a point by percentage between two point goal pairs.",
        "note": "A negative value for Percent will result in subtraction. Set Point2 to 0 to use the point that is stored by up-set-target-point.",
        "section": "Action",
        "param": [ {
            "name": "Point1",
            "type": "Goal",
            "dir": "io",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        }, {
            "name": "Point2",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "type"
        }, {
            "name": "Percent",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The percent between the two points to select."
        } ],
        "example": [ {
            "title": "Get the point at 25% from the home town-center to the map center.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-center-x 200)\r\n(defconst gl-center-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-self gl-point-x)\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-lerp-percent gl-point-x gl-center-x c: 25)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-lerp-tiles",
        "description": "Interpolate a point by tiles between two point goal pairs.",
        "note": "A negative value for Tiles will result in subtraction. Set Point2 to 0 to use the point that is stored by up-set-target-point.",
        "section": "Action",
        "param": [ {
            "name": "Point1",
            "type": "Goal",
            "dir": "io",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        }, {
            "name": "Point2",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "type"
        }, {
            "name": "Tiles",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The number of tiles to move along the vector."
        } ],
        "example": [ {
            "title": "Get the point 10 tiles toward the map center from the home town-center.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-center-x 200)\r\n(defconst gl-center-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-self gl-point-x)\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-lerp-tiles gl-point-x gl-center-x c: 10)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-cross-tiles",
        "description": "Get a point perpendicular to two point goal pairs.",
        "note": "A negative value for Tiles will result in subtraction. Set Point2 to 0 to use the point that is stored by up-set-target-point.",
        "section": "Action",
        "param": [ {
            "name": "Point1",
            "type": "Goal",
            "dir": "io",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        }, {
            "name": "Point2",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "type"
        }, {
            "name": "Tiles",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The number of tiles to move along the vector."
        } ],
        "example": [ {
            "title": "Get the point 10 tiles right of the home town-center relative to the map center.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-center-x 200)\r\n(defconst gl-center-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-self gl-point-x)\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-cross-tiles gl-point-x gl-center-x c: 10)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-copy-point",
        "description": "Copy one point goal pair into another pair of extended goals.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Point1",
            "type": "Goal",
            "dir": "out",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        }, {
            "name": "Point2",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        } ],
        "example": [ {
            "title": "Copy the position of the map center.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-other-x 200)\r\n(defconst gl-other-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-point-x)\r\n\t(up-copy-point gl-other-x gl-point-x)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-set-target-point",
        "description": "Set the target point for other commands with an extended goal pair.",
        "note": "This command will also safely bound the point inside the map.",
        "section": "Action",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        }],
        "example": [{
            "title": "Set the target point to the map center.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-point-x)\r\n\t(up-set-target-point gl-point-x)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-set-precise-target-point",
        "description": "Set the target point with an unchecked extended goal pair.",
        "note": "This command is identical to up-set-target-point, except it will not bound the point inside the map. Please ensure the point is valid with up-bound-precise-point. A precise point is expected to be a normal point x100 for 2 places of decimal precision.",
        "section": "Action",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        }],
        "example": [{
            "title": "Set the target point to the precise map center.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-point-x)\r\n\t(up-modify-goal gl-point-x c:* 100)\r\n\t(up-modify-goal gl-point-y c:* 100)\r\n\t(up-set-precise-target-point gl-point-x)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-point-distance",
        "description": "Get the distance between two point goal pairs.",
        "note": "Set Point2 to 0 to use the point that is stored by up-set-target-point.",
        "section": "Action",
        "param": [ {
            "name": "Point1",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "name": "Point2",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "name": "Distance",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the distance between the two points."
        } ],
        "example": [ {
            "title": "Get the distance from the home town-center to the map center.",
            "data": "(defconst gl-self-x 100)\r\n(defconst gl-self-y 101)\r\n(defconst gl-center-x 200)\r\n(defconst gl-center-y 201)\r\n(defconst gl-distance 300)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-self gl-self-x)\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-get-point-distance gl-self-x gl-center-x gl-distance)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-point-distance",
        "description": "Perform a distance check between two point goal pairs.",
        "note": "Set Point2 to 0 to use the point that is stored by up-set-target-point.",
        "section": "Fact",
        "param": [ {
            "name": "Point1",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "name": "Point2",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if the distance from the home town-center to the map center is greater than 5.",
            "data": "(defconst gl-self-x 100)\r\n(defconst gl-self-y 101)\r\n(defconst gl-center-x 200)\r\n(defconst gl-center-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-self gl-self-x)\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-distance gl-self-x gl-center-x > 5)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-point-terrain",
        "description": "Get the terrain id at a specific point goal pair position.",
        "note": "Set Point to 0 to use the point that is stored by up-set-target-point.",
        "section": "Action",
        "param": [ {
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "name": "Terrain",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the terrain id at the position."
        } ],
        "example": [ {
            "title": "Get the terrain id at the map center.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defconst gl-terrain 200)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-get-point-terrain gl-center-x gl-terrain)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-point-terrain",
        "description": "Perform a terrain id check at a point goal pair position.",
        "note": "Set Point to 0 to use the point that is stored by up-set-target-point.",
        "section": "Fact",
        "param": [ {
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "compare"
        }, {
            "name": "Terrain",
            "type": "Op",
            "dir": "in",
            "range": "0 to 41",
            "note": "A terrain id for comparison."
        } ],
        "example": [ {
            "title": "Check if the terrain at the map center is grass.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-terrain gl-center-x == terrain-grass)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-point-contains",
        "description": "Check if an object exists at a point goal pair position.",
        "note": "Set Point to 0 to use the point that is stored by up-set-target-point. Please note that when used with all-units-class (-1), this may capture unexpected objects like birds flying over a tile, terrain plants, etc.",
        "section": "Fact",
        "param": [ {
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "type"
        }, {
            "name": "ObjectId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The object to check."
        } ],
        "example": [ {
            "title": "Check if a tree exists at the map center.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-contains gl-center-x c: tree-class) ; tree-class = 915\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-find-flare",
        "description": "Read the (x,y) position of an allied flare into an extended goal pair.",
        "note": "This command writes to 2 consecutive goals and requires an extended goal pair between 41 and 510. If it fails to get a valid position, it will return (-1,-1). This command is equivalent to up-find-player-flare with any-ally.",
        "section": "Action",
        "param": [ {
            "name": "Point",
            "type": "Goal",
            "dir": "out",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        } ],
        "example": [ {
            "title": "Get the position of the latest ally flare.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(unit-type-count flare > 0) ; flare = 274\r\n=&gt;\r\n\t(up-find-flare gl-point-x)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-find-player-flare",
        "description": "Read the (x,y) position of any visible flare into an extended goal pair.",
        "note": "This command writes to 2 consecutive goals and requires an extended goal pair between 41 and 510. If it fails to get a valid position, it will return (-1,-1).",
        "section": "Action",
        "param": [ {
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "a PlayerId for: any",
            "note": "The player(s) to check."
        }, {
            "name": "Point",
            "type": "Goal",
            "dir": "out",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        } ],
        "example": [ {
            "title": "Get the position of any enemy flare.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(unit-type-count flare > 0) ; flare = 274\r\n=&gt;\r\n\t(up-find-player-flare any-enemy gl-point-x)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-send-flare",
        "description": "Send a flare to allies from a point goal pair.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to read the (x,y) pair."
        } ],
        "example": [ {
            "title": "Send a flare to allies at your target position.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-target gl-point-x)\r\n\t(up-send-flare gl-point-x)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-search-state",
        "description": "Get the search state into 4 consecutive extended goals.",
        "note": "The goals will be filled with data in the following order: current local search total, last local search count, current remote search total, last remote search count.",
        "section": "Action",
        "param": [ {
            "name": "State",
            "type": "Goal",
            "dir": "out",
            "range": "an extended GoalId from 41 to 508",
            "note": "The first of 4 consecutive goals to read the state."
        } ],
        "example": [ {
            "title": "Get the search state.",
            "data": "(defconst gl-local-total 100)\r\n(defconst gl-local-last 101)\r\n(defconst gl-remote-total 102)\r\n(defconst gl-remote-last 103)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-search-state gl-local-total)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-reset-search",
        "description": "Reset the search state for the direct unit targeting system.",
        "note": "",
        "section": "Action",
        "param": [ {
            "name": "LocalIndex",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to clear the offset into the list of local objects to search."
        }, {
            "name": "LocalList",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to clear the local object list from previous searches."
        }, {
            "name": "RemoteIndex",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to clear the offset into the list of remote objects to search."
        }, {
            "name": "RemoteList",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to clear the remote object list from previous searches."
        } ],
        "example": [ {
            "title": "Clear all search states.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-search 1 1 1 1)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-reset-filters",
        "description": "Reset search indices and filter states for direct unit targeting.",
        "note": "All filter states will be set to -1. Use up-reset-search to clear search results.",
        "section": "Action",
        "param": [],
        "example": [{
            "title": "Clear search indices and filter states.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-filters)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-full-reset-search",
        "description": "Reset all search and filter states for direct unit targeting.",
        "note": "This command simply combines (up-reset-search 1 1 1 1) and (up-reset-filters) for rule size optimization.",
        "section": "Action",
        "param": [],
        "example": [{
            "title": "Clear all search and filter states.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-full-reset-search)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-filter-include",
        "description": "Set include parameters for the direct targeting system.",
        "note": "If any of these parameters is set to -1, then the associated condition will be ignored during search filtering.",
        "section": "Action",
        "param": [ {
            "name": "CmdId",
            "type": "Const",
            "dir": "in",
            "range": "-1 to 10",
            "note": "The command id to select."
        }, {
            "name": "ActionId",
            "type": "Const",
            "dir": "in",
            "range": "-1, 600 to 699",
            "note": "The action id to select."
        }, {
            "name": "OrderId",
            "type": "Const",
            "dir": "in",
            "range": "-1, 700 to 799",
            "note": "The order id to select."
        }, {
            "name": "OnMainland",
            "type": "Const",
            "dir": "in",
            "range": "-1, 0, or 1",
            "note": "If set to 1, select only objects on the mainland. If set to 0, select those not on the mainland."
        } ],
        "example": [ {
            "title": "Configure the search system to only select units with the villager command id.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-include 3 -1 -1 -1)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-filter-exclude",
        "description": "Set exclude parameters for the direct targeting system.",
        "note": "If any of these parameters is set to -1, then the associated condition will be ignored during search filtering.",
        "section": "Action",
        "param": [ {
            "name": "CmdId",
            "type": "Const",
            "dir": "in",
            "range": "-1 to 10",
            "note": "The command id to reject."
        }, {
            "name": "ActionId",
            "type": "Const",
            "dir": "in",
            "range": "-1, 600 to 699",
            "note": "The action id to reject."
        }, {
            "name": "OrderId",
            "type": "Const",
            "dir": "in",
            "range": "-1, 700 to 799",
            "note": "The order id to reject."
        }, {
            "name": "ClassId",
            "type": "Const",
            "dir": "in",
            "range": "a valid ClassId",
            "note": "Reject units of the specified class."
        } ],
        "example": [ {
            "title": "Configure the search system to reject units with the trade command id.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-exclude 5 -1 -1 -1)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-filter-range",
        "description": "Set range parameters for the direct targeting system.",
        "note": "If any of these parameters is set to -1, then the associated condition will be ignored during search filtering.",
        "section": "Action",
        "param": [ {
            "name": "MinGarrison",
            "type": "Const",
            "dir": "in",
            "range": "-1 to 32767",
            "note": "The minimum acceptable value for objects garrisoned."
        }, {
            "name": "MaxGarrison",
            "type": "Const",
            "dir": "in",
            "range": "-1 to 32767",
            "note": "The maximum acceptable value for objects garrisoned."
        }, {
            "name": "MinDistance",
            "type": "Const",
            "dir": "in",
            "range": "-1 to 32767",
            "note": "The minimum acceptable distance from the point specified by up-set-target-point."
        }, {
            "name": "MaxDistance",
            "type": "Const",
            "dir": "in",
            "range": "-1 to 32767",
            "note": "The maximum acceptable distance from the point specified by up-set-target-point."
        } ],
        "example": [ {
            "title": "Configure the search system to only select units within 10 tiles of the target point.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-range -1 -1 -1 10)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-filter-distance",
        "description": "Set distance parameters for the direct targeting system.",
        "note": "If any of these parameters is set to -1, then the associated condition will be ignored during search filtering.",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "MinDistance",
            "type": "Op",
            "dir": "in",
            "range": "-1 to 32767",
            "note": "The minimum acceptable distance from the point specified by up-set-target-point."
        }, {
            "op": "type"
        }, {
            "name": "MaxDistance",
            "type": "Op",
            "dir": "in",
            "range": "-1 to 32767",
            "note": "The maximum acceptable distance from the point specified by up-set-target-point."
        } ],
        "example": [ {
            "title": "Configure the search system to only select units within 10 tiles of the target point.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-distance c: -1 c: 10)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-filter-garrison",
        "description": "Set garrison parameters for the direct targeting system.",
        "note": "If any of these parameters is set to -1, then the associated condition will be ignored during search filtering.",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "MinGarrison",
            "type": "Op",
            "dir": "in",
            "range": "-1 to 32767",
            "note": "The minimum acceptable value for objects garrisoned."
        }, {
            "op": "type"
        }, {
            "name": "MaxGarrison",
            "type": "Op",
            "dir": "in",
            "range": "-1 to 32767",
            "note": "The maximum acceptable value for objects garrisoned."
        } ],
        "example": [ {
            "title": "Configure the search system to only select units with at least 5 garrisoned units.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-garrison c: 5 c: -1)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-target-point",
        "description": "Direct local search results to a specific point on the map.",
        "note": "This command can perform all actions from the TargetAction enumeration. However, action-default, action-guard, action-follow, and action-garrison will perform as action-move. If you wish to action-move back into formation nearby after attacking, please action-move to -1,-1 to reset distance.",
        "section": "Action",
        "param": [ {
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "name": "Action",
            "type": "Const",
            "dir": "in",
            "range": "a value from the TargetAction enumeration",
            "note": "The action to perform with the selected units."
        }, {
            "name": "Formation",
            "type": "Const",
            "dir": "in",
            "range": "-1, formation-line, formation-box, formation-stagger, or formation-flank",
            "note": "The formation to set or -1 to do nothing."
        }, {
            "name": "AttackStance",
            "type": "Const",
            "dir": "in",
            "range": "-1, stance-aggressive, stance-defensive, stance-stand-ground, or stance-no-attack",
            "note": "The stance to set or -1 to do nothing."
        } ],
        "example": [ {
            "title": "Send selected units from up-find-local to the map center.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-point-x)\r\n\t(up-target-point gl-point-x action-default -1 -1)\r\n)"
        }, {
            "title": "Train a spearman with action-train: (up-target-point inGoalEscrowState action-train typeOp inOpTypeId). The value for inGoalEscrowState must be either 0 for without-escrow or an extended goal from 41-510.",
            "data": "(defrule\r\n\t(up-find-local c: barracks c: 1)\r\n=&gt;\r\n\t(up-target-point 0 action-train c: spearman)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-target-objects",
        "description": "Direct local search results against remote search results.",
        "note": "The action-default command is equivalent to a right-click. This command can only perform the following actions: action-default, action-move, action-patrol, action-guard, action-follow, action-stop, action-ground, action-garrison, action-delete, action-gather, and action-none.",
        "section": "Action",
        "param": [ {
            "name": "Target",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to target only the object set by up-set-target-object."
        }, {
            "name": "Action",
            "type": "Const",
            "dir": "in",
            "range": "action-default, action-move, action-patrol, action-guard, action-follow, action-stop, action-ground, action-garrison, action-delete, action-gather, action-none",
            "note": "The action to perform with the selected units."
        }, {
            "name": "Formation",
            "type": "Const",
            "dir": "in",
            "range": "-1, formation-line, formation-box, formation-stagger, or formation-flank",
            "note": "The formation to set or -1 to do nothing."
        }, {
            "name": "AttackStance",
            "type": "Const",
            "dir": "in",
            "range": "-1, stance-aggressive, stance-defensive, stance-stand-ground, or stance-no-attack",
            "note": "The stance to set or -1 to do nothing."
        } ],
        "example": [ {
            "title": "Patrol selected units from up-find-local against those from up-find-remote.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-target-objects 0 action-patrol -1 -1)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-find-local",
        "description": "Find objects owned by the local player for direct targeting.",
        "note": "If UnitId changes, the search index offset will be reset. Otherwise, it will continue from where it left off. This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The unit type that will be selected."
        }, {
            "op": "type"
        }, {
            "name": "Count",
            "type": "Op",
            "dir": "in",
            "range": "0 to 240",
            "note": "The number of results to find."
        } ],
        "example": [ {
            "title": "Find up to 20 infantry units owned by the player.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-find-local c: infantry-class c: 20) ; infantry-class = 906\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-find-remote",
        "description": "Find objects owned by the focus player for direct targeting.",
        "note": "Set sn-focus-player-number before using this command. If the focus or UnitId changes, the search index offset will be reset. Otherwise, it will continue from where it left off. This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The unit type that will be selected."
        }, {
            "op": "type"
        }, {
            "name": "Count",
            "type": "Op",
            "dir": "in",
            "range": "0 to 40",
            "note": "The number of results to find."
        } ],
        "example": [ {
            "title": "Find up to 4 castles owned by the enemy, player 2.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-focus-player-number 2)\r\n\t(up-find-remote c: castle c: 4)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-set-target-object",
        "description": "Set the target object for other commands from your search.",
        "note": "Reference it with up-get-point and position-object. If the Index is invalid, the current target object will remain unchanged. This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [ {
            "name": "SearchSource",
            "type": "Const",
            "dir": "in",
            "range": "search-local or search-remote",
            "note": "The search source to check."
        }, {
            "op": "type"
        }, {
            "name": "Index",
            "type": "Op",
            "dir": "in",
            "range": "0 to 240",
            "note": "The zero-based index of the object to set."
        } ],
        "example": [ {
            "title": "Set the target object to the first result from the local search.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-find-local c: villager-class c: 3)\r\n\t(up-set-target-object search-local c: 0)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-set-target-by-id",
        "description": "Set the target object for other commands by id.",
        "note": "Reference it with up-get-point and position-object. If the Id is invalid, the current target object will remain unchanged. This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [ {
            "op": "type"
        }, {
            "name": "Id",
            "type": "Op",
            "dir": "in",
            "range": "a valid Id",
            "note": "The zero-based id of the object to set."
        } ],
        "example": [ {
            "title": "Set the target object by a specific id obtained from up-get-object-data.",
            "data": "(defconst gl-stored-id 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-object-data object-data-id gl-stored-id)\r\n\t(up-set-target-by-id g: gl-stored-id)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-get-object-data",
        "description": "Get specific information about the selected target object.",
        "note": "This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [ {
            "name": "ObjectData",
            "type": "Const",
            "dir": "in",
            "range": "a value from the ObjectData enumeration",
            "note": "The type of data to retrieve."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the result or -2 to indicate failure."
        } ],
        "example": [ {
            "title": "Get the class id of the target object.",
            "data": "(defconst gl-data 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-object-data object-data-class gl-data)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-object-data",
        "description": "Check specific information about the selected target object.",
        "note": "",
        "section": "Fact",
        "param": [ {
            "name": "ObjectData",
            "type": "Const",
            "dir": "in",
            "range": "a value from the ObjectData enumeration",
            "note": "The type of data to retrieve."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        } ],
        "example": [ {
            "title": "Check if the target-object holds more than 3 units.",
            "data": "(defrule\r\n\t(up-object-data object-data-garrison-count &gt; 3)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        } ],
        "related": []
    }, {
        "name": "up-can-search",
        "description": "Check the status for either the local or remote search.",
        "note": "If the result list is full or the index offset is at the end of the player object list, this will return false.",
        "section": "Fact",
        "param": [ {
            "name": "SearchSource",
            "type": "Const",
            "dir": "in",
            "range": "search-local or search-remote",
            "note": "The search source to check."
        } ],
        "example": [ {
            "title": "Check if up-reset-search must be executed before up-find-local.",
            "data": "(defrule\r\n\t(not(up-can-search search-local))\r\n=&gt;\r\n\t(up-reset-search 1 1 0 0)\r\n)"
        } ],
        "related": []
    }


    , {
        "name": "up-get-object-target-data",
        "description": "Get specific information about the target object's target.",
        "note": "This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [{
            "name": "ObjectData",
            "type": "Const",
            "dir": "in",
            "range": "a value from the ObjectData enumeration",
            "note": "The type of data to retrieve."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the result or -2 to indicate failure."
        }],
        "example": [{
            "title": "Get the class id of the target object's target.",
            "data": "(defconst gl-data 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-object-target-data object-data-class gl-data)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-object-target-data",
        "description": "Check specific information about the target object's target.",
        "note": "",
        "section": "Fact",
        "param": [{
            "name": "ObjectData",
            "type": "Const",
            "dir": "in",
            "range": "a value from the ObjectData enumeration",
            "note": "The type of data to retrieve."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        }],
        "example": [{
            "title": "Check if the target object's target holds more than 3 units.",
            "data": "(defrule\r\n\t(up-object-target-data object-data-garrison-count &gt; 3)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-object-type-data",
        "description": "Get generic information about an object type.",
        "note": "This can be expensive, so please consider performance.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "TypeId",
            "type": "Op",
            "dir": "in",
            "range": "a valid TypeId",
            "note": "The type id."
        }, {
            "name": "ObjectData",
            "type": "Const",
            "dir": "in",
            "range": "a value from the ObjectData enumeration",
            "note": "The type of data to retrieve."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the result or -2 to indicate failure."
        }],
        "example": [{
            "title": "Get the train site for skirmisher-line.",
            "data": "(defconst gl-data 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-object-type-data c: skirmisher-line object-data-train-site gl-data)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-add-object-by-id",
        "description": "Add an object to the search results by id.",
        "note": "This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [{
            "name": "SearchSource",
            "type": "Const",
            "dir": "in",
            "range": "search-local or search-remote",
            "note": "The search source to modify."
        }, {
            "op": "type"
        }, {
            "name": "Id",
            "type": "Op",
            "dir": "in",
            "range": "a valid Id",
            "note": "The zero-based id of the object to set."
        }],
        "example": [{
            "title": "Add an object to the local search results by a specific id.",
            "data": "(defconst gl-stored-id 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-add-object-by-id search-local g: gl-stored-id)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-can-build-line",
        "description": "Check if a building can be constructed at a point goal pair.",
        "note": "For town centers and gates, please use a FoundationId, such as town-center-foundation or gate-ascending. Do not use town-center or gate with this command.",
        "section": "Action",
        "param": [{
            "name": "EscrowState",
            "type": "Goal",
            "dir": "in",
            "range": "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
            "note": "Determines whether escrowed resources are considered."
        }, {
            "name": "Point1",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        }, {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The building type that will be constructed."
        }],
        "example": [{
            "title": "Check if a palisade-wall can be constructed without escrow.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(up-can-build-line 0 gl-point-x c: palisade-wall)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-build-line",
        "description": "Place a line of buildings between two point goal pairs.",
        "note": "For town centers and gates, please use a FoundationId, such as town-center-foundation or gate-ascending. Do not use town-center or gate with this command.",
        "section": "Action",
        "param": [{
            "name": "Point1",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        }, {
            "name": "Point2",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "type"
        }, {
            "name": "BuildingId",
            "type": "Op",
            "dir": "in",
            "range": "a BuildingId",
            "note": "The building type that will be constructed."
        }],
        "example": [{
            "title": "Build a palisade wall between 2 points.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-other-x 200)\r\n(defconst gl-other-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-build-line gl-point-x gl-other-x c: palisade-wall)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-jump-dynamic",
        "description": "Jump dynamically within the current rule set.",
        "note": "Never use this command where #load blocks may make your jump target unreliable. Please ensure that the rule you are jumping to actually exists. With this action, you can either decrease rules per pass with intelligent skips, or greatly increase it with loops. Please consider game performance.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "RuleDelta",
            "type": "Op",
            "dir": "in",
            "range": "the number of rules to jump",
            "note": "Positive values will jump forward, while negative values will jump backward."
        }],
        "example": [{
            "title": "Skip 1 rule if a condition is true.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-jump-dynamic c: 1)\r\n)\r\n(defrule ; this rule is skipped\r\n\t(true)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-jump-direct",
        "description": "Jump directly within the current rule set.",
        "note": "Please ensure that the rule you are jumping to actually exists. You can use up-get-rule-id to get a valid rule id to jump to. With this action, you can either decrease rules per pass with intelligent skips, or greatly increase it with loops. Please consider game performance.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "RuleId",
            "type": "Op",
            "dir": "in",
            "range": "a valid zero-based rule id",
            "note": "Please do not attempt to jump to a negative rule id."
        }],
        "example": [{
            "title": "Skip to the second rule of the AI if a condition is true.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-jump-direct c: 2)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-rule-id",
        "description": "Get the zero-based id for the current rule within the rule set.",
        "note": "This id can be used with up-jump-direct to precisely control jump destinations.",
        "section": "Action",
        "param": [{
            "name": "RuleId",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the current zero-based rule id."
        }],
        "example": [{
            "title": "Get the current rule id.",
            "data": "(defconst gl-current-rule-id 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-rule-id gl-current-rule-id)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-guard-state",
        "description": "Get the guard state into 4 consecutive extended goals.",
        "note": "The goals will be filled with data in the following order: TypeId, ResourceAmount, ResourceDelta, GuardFlags. Please use up-compare-flag to check the guard flags. If guard-flag-resource is set in GuardFlags, then ResourceDelta/100 will slowly be added to ResourceAmount as long as TypeId objects remain. If both guard-flag-resource and guard-flag-inverse are set, then the resources will be added only when there are no TypeId objects left. If the guard-flag-victory condition is set, the AI will be defeated if no TypeId objects remain.",
        "section": "Action",
        "param": [{
            "name": "State",
            "type": "Goal",
            "dir": "out",
            "range": "an extended GoalId from 41 to 508",
            "note": "The first of 4 consecutive goals to read the state."
        }],
        "example": [{
            "title": "Check if the AI will be defeated if the guard type is lost.",
            "data": "(defconst gl-guard-type 100)\r\n(defconst gl-guard-resource 101)\r\n(defconst gl-guard-delta 102)\r\n(defconst gl-guard-flags 103)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-guard-state gl-guard-type)\r\n)\r\n(defrule\r\n\t(up-compare-flag gl-guard-flags == guard-flag-victory)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }, {
            "title": "Check if the AI will gain resources while protecting the guard type.",
            "data": "(defconst gl-guard-type 100)\r\n(defconst gl-guard-resource 101)\r\n(defconst gl-guard-delta 102)\r\n(defconst gl-guard-flags 103)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-guard-state gl-guard-type)\r\n)\r\n(defrule\r\n\t(up-compare-goal gl-guard-delta > 0)\r\n\t(up-compare-flag gl-guard-flags == guard-flag-resource)\r\n\t(up-compare-flag gl-guard-flags != guard-flag-inverse)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-compare-text",
        "description": "Perform a string comparison with the stored text.",
        "note": "You must store text before using this command and the provided string parameter must be a text defconst. If the provided string cannot be found anywhere in the stored text, the value will be -1. Otherwise, the value will be the index of the match.",
        "section": "Fact",
        "param": [{
            "op": "type"
        }, {
            "name": "Text",
            "type": "Op",
            "dir": "in",
            "range": "a text defconst",
            "note": "The text to match."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-1 to 32767",
            "note": "The number that will be used in the operation."
        }],
        "example": [{
            "title": "Check if player 1 has &quot;one&quot; in their name.",
            "data": "(defconst text-name-one &quot;one&quot;)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-player-name 1)\r\n)\r\n(defrule\r\n\t(up-compare-text c: text-name-one >= 0)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-compare-flag",
        "description": "Perform a bitwise flag test with a goal variable.",
        "note": "Flags allow multiple states to be stored in a single value by using powers of 2 (1, 2, 4, 8, 16, etc.). You can use [cgs]:== to see if a flag is stored or [cgs]:!= to see if it isn't stored.",
        "section": "Fact",
        "param": [{
            "name": "Id",
            "type": "Goal",
            "dir": "in",
            "range": "a GoalId",
            "note": "The goal that will be compared."
        }, {
            "op": "compare"
        }, {
            "name": "Flag",
            "type": "Op",
            "dir": "in",
            "range": "a valid flag",
            "note": "A flag to check."
        }],
        "example": [{
            "title": "Check if the goal named &quot;gl-guard-flag&quot; contains the flag for guard-flag-resource.",
            "data": "(defconst gl-guard-flag 103)\r\n(defrule\r\n\t(up-compare-flag gl-guard-flag == guard-flag-resource)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-modify-flag",
        "description": "Modify a bitwise flag on the value stored in a goal variable.",
        "note": "Flags allow multiple states to be stored in a single value by using powers of 2 (1, 2, 4, 8, 16, etc.). The only ops allowed are [cgs]:+ to append a flag and [cgs]:- to remove a flag.",
        "section": "Action",
        "param": [{
            "name": "Id",
            "type": "Goal",
            "dir": "io",
            "range": "a GoalId",
            "note": "The goal that will be modified."
        }, {
            "op": "math"
        }, {
            "name": "Flag",
            "type": "Op",
            "dir": "in",
            "range": "a valid flag",
            "note": "The flag that will be used in the operation."
        }],
        "example": [{
            "title": "Append a flag to the value stored in &quot;gl-settings&quot;.",
            "data": "(defconst gl-settings 101)\r\n(defconst first-state 1)\r\n(defconst second-state 2)\r\n(defconst third-state 4)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-modify-flag gl-settings c:+ second-state)\r\n\t(disable-self)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-tribute-to-player",
        "description": "Tribute a variable amount of resources to other players.",
        "note": "",
        "section": "Action",
        "param": [{
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "a PlayerId for: any",
            "note": "The player(s) to tribute."
        }, {
            "name": "ResourceAmount",
            "type": "Const",
            "dir": "in",
            "range": "a const from the ResourceAmount enumeration",
            "note": "The resource that will be modified."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "0 to 32767",
            "note": "The amount of resources."
        }],
        "example": [{
            "title": "Send 100 food to the focus-player.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-focus-player-number 2)\r\n\t(up-tribute-to-player focus-player food c: 100)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-buy-commodity",
        "description": "Buy a variable amount of resources at the market.",
        "note": "The actual amount you receive depends on available gold.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "ResourceAmount",
            "type": "Op",
            "dir": "in",
            "range": "a const from the ResourceAmount enumeration",
            "note": "The resource that will be modified."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "1 to 32767",
            "note": "The amount of resources."
        }],
        "example": [{
            "title": "Attempt to buy 300 food at the market.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-buy-commodity c: food c: 300)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-sell-commodity",
        "description": "Sell a variable amount of resources at the market.",
        "note": "The actual amount you sell depends on available resources.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "ResourceAmount",
            "type": "Op",
            "dir": "in",
            "range": "a const from the ResourceAmount enumeration",
            "note": "The resource that will be modified."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "1 to 32767",
            "note": "The amount of resources."
        }],
        "example": [{
            "title": "Attempt to sell 200 wood at the market.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-sell-commodity c: wood c: 200)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-cc-add-resource",
        "description": "Add resources dynamically to the player stockpile.",
        "note": "This is considered a cheat command, but cheats do not have to be enabled.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "ResourceAmount",
            "type": "Op",
            "dir": "in",
            "range": "a const from the ResourceAmount enumeration",
            "note": "The resource that will be modified."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The amount of resources."
        }],
        "example": [{
            "title": "Add 100 food to the stockpile.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-cc-add-resource c: food c: 100)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-log-data",
        "description": "Write a formatted text line to aoelog.txt.",
        "note": "Set Plain to 1 in order to write plain text. You must close the game in order to open aoelog.txt, which is located in the game folder. Please consider game performance when writing data.",
        "section": "Action",
        "param": [{
            "name": "Plain",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "A value to determine whether the data is formatted or plain text."
        }, {
            "name": "Format",
            "type": "Text",
            "dir": "in",
            "range": "quoted text, where %d is replaced by the provided value",
            "note": "A formatted quote of text that will be logged."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The value that will replace %d in the format string of text."
        }],
        "example": [{
            "title": "Log the player number.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-log-data 0 &quot;Player number: %d&quot; c: my-player-number)\r\n\t(disable-self)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-precise-time",
        "description": "Get a system timestamp or the elapsed time into a goal.",
        "note": "",
        "section": "Action",
        "param": [{
            "name": "Start",
            "type": "Goal",
            "dir": "in",
            "range": "a valid GoalId to get elapsed time, or 0 to get a timestamp",
            "note": "Determines whether a timestamp or elapsed time is retrieved."
        }, {
            "name": "Time",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the time data."
        }],
        "example": [{
            "title": "Get the current timestamp.",
            "data": "(defconst gl-start-time 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-precise-time 0 gl-start-time)\r\n\t(disable-self)\r\n)"
        }, {
            "title": "Get the elapsed time since the starting timestamp.",
            "data": "(defconst gl-start-time 100)\r\n(defconst gl-elapsed-time 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-precise-time gl-start-time gl-elapsed-time)\r\n\t(disable-self)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-signal",
        "description": "Get the value of a scenario trigger signal.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "SignalId",
            "type": "Op",
            "dir": "in",
            "range": "0 to 255",
            "note": "The signal to get."
        }, {
            "name": "Value",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the signal value."
        }],
        "example": [{
            "title": "Get the value of signal id 0.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-signal c: 0 gl-value)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-set-signal",
        "description": "Set the value of a scenario trigger signal.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "SignalId",
            "type": "Op",
            "dir": "in",
            "range": "0 to 255",
            "note": "The signal to set."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The new value for the signal."
        }],
        "example": [{
            "title": "Set the value of signal id 1 to 0.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-signal c: 1 c: 0)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-event",
        "description": "Get the value of a scenario trigger event.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "EventId",
            "type": "Op",
            "dir": "in",
            "range": "0 to 255",
            "note": "The event to get."
        }, {
            "name": "Value",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the event value."
        }],
        "example": [{
            "title": "Get the value of event id 0.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-event c: 0 gl-value)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-set-event",
        "description": "Set the value of a scenario trigger event.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "EventId",
            "type": "Op",
            "dir": "in",
            "range": "0 to 255",
            "note": "The event to set."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The new value for the event."
        }],
        "example": [{
            "title": "Set the value of event id 1 to 0.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-event c: 1 c: 0)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-shared-goal",
        "description": "Get the value of a shared goal.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "SharedGoalId",
            "type": "Op",
            "dir": "in",
            "range": "1 to 256",
            "note": "The shared goal to get."
        }, {
            "name": "Value",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the shared goal value."
        }],
        "example": [{
            "title": "Get the value of shared goal id 0.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-shared-goal c: 0 gl-value)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-set-shared-goal",
        "description": "Set the value of a shared goal.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "SharedGoalId",
            "type": "Op",
            "dir": "in",
            "range": "1 to 256",
            "note": "The shared goal to set."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The new value for the shared goal."
        }],
        "example": [{
            "title": "Set the value of shared goal id 1 to 0.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-shared-goal c: 1 c: 0)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-indirect-goal",
        "description": "Get the value of a goal indirectly by reference.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "GoalId",
            "type": "Op",
            "dir": "in",
            "range": "1 to 512",
            "note": "The goal to get."
        }, {
            "name": "Value",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the goal value."
        }],
        "example": [{
            "title": "Get the value of goal id 1 indirectly using goal id 10.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-goal 10 1)\r\n\t(up-get-indirect-goal g: 10 gl-value)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-set-indirect-goal",
        "description": "Set the value of a goal indirectly by reference.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "GoalId",
            "type": "Op",
            "dir": "in",
            "range": "1 to 512",
            "note": "The goal to set."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The new value for the goal."
        }],
        "example": [{
            "title": "Set the value of goal id 2 to 128 indirectly using goal id 10.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-goal 10 2)\r\n\t(up-set-indirect-goal g: 10 c: 128)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-timer",
        "description": "Get the trigger time for a timer in milliseconds.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "TimerId",
            "type": "Op",
            "dir": "in",
            "range": "1 to 50",
            "note": "The timer to get."
        }, {
            "name": "Value",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the shared goal value."
        }],
        "example": [{
            "title": "Get the trigger time for timer id 20.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-timer c: 20 gl-value)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-set-timer",
        "description": "Disable or enable a timer by interval.",
        "note": "Set Value to -1 to disable the timer. If Value is positive, this will perform like the enable-timer action.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "TimerId",
            "type": "Op",
            "dir": "in",
            "range": "1 to 50",
            "note": "The timer to set."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-1 to 32767",
            "note": "The new value for the timer."
        }],
        "example": [{
            "title": "Enable timer 20 to trigger in 10 seconds.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-timer c: 20 c: 10)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-upgrade-id",
        "description": "Get the upgrade type id for an object into a goal.",
        "note": "",
        "section": "Action",
        "param": [{
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "a single PlayerId for: self, this-any",
            "note": "The player to get."
        }, {
            "name": "Count",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to get the current type id for counting."
        }, {
            "name": "TypeId",
            "type": "Goal",
            "dir": "in",
            "range": "a valid GoalId",
            "note": "Set to a valid type or line id."
        }, {
            "name": "UpgradeId",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the upgrade type id."
        }],
        "example": [{
            "title": "Get the current upgrade type id for militia.",
            "data": "(defconst gl-type 100)\r\n(defconst gl-upgrade 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-goal gl-type militiaman-line)\r\n\t(up-get-upgrade-id my-player-number 0 gl-type gl-upgrade)\r\n\t(up-store-type-name g: gl-upgrade)\r\n\t(up-chat-data-to-all &quot;Upgrade: %s&quot; c: 7031232)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-player-color",
        "description": "Get the color id and store the name in the internal buffer.",
        "note": "ColorId will range from 1 to 8. The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.",
        "section": "Action",
        "param": [{
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "a single PlayerId for: self, this-any",
            "note": "The player to get."
        }, {
            "name": "ColorId",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the color id."
        }],
        "example": [{
            "title": "Get the color of the target-player.",
            "data": "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-player-color target-player gl-value)\r\n\t(up-chat-data-to-all &quot;Target: %s&quot; c: 7031232)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-store-text",
        "description": "Store a language string in the internal buffer.",
        "note": "The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "LanguageId",
            "type": "Op",
            "dir": "in",
            "range": "a valid LanguageId",
            "note": "The text string."
        }],
        "example": [{
            "title": "Store 'Random' in the buffer.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-text c: 10230) ;10230 is the language id for Random\r\n\t(up-chat-data-to-all &quot;Text: %s&quot; c: 7031232)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-store-player-chat",
        "description": "Store a player chat message in the internal buffer.",
        "note": "Note that only the last word of a chat message will be stored in the buffer and the message must be present in the host's chat history log (the PageUp key can find it). The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.",
        "section": "Action",
        "param": [{
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "a single PlayerId for: self, this-any",
            "note": "The player to get."
        }],
        "example": [{
            "title": "Store the focus-player's chat in the buffer.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-player-chat focus-player)\r\n\t(up-chat-data-to-all &quot;Message: %s&quot; c: 7031232)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-store-player-name",
        "description": "Store a player name in the internal buffer.",
        "note": "The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.",
        "section": "Action",
        "param": [{
            "name": "Any",
            "type": "Player",
            "dir": "in",
            "range": "a single PlayerId for: self, this-any",
            "note": "The player to get."
        }],
        "example": [{
            "title": "Store the focus-player's name in the buffer.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-player-name focus-player)\r\n\t(up-chat-data-to-all &quot;Player: %s&quot; c: 7031232)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-store-type-name",
        "description": "Store an object type name in the internal buffer.",
        "note": "The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "TypeId",
            "type": "Op",
            "dir": "in",
            "range": "a valid TypeId",
            "note": "The type id."
        }],
        "example": [{
            "title": "Store the proper name for barracks in the buffer.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-type-name c: barracks)\r\n\t(up-chat-data-to-all &quot;Type: %s&quot; c: 7031232)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-store-tech-name",
        "description": "Store a research tech name in the internal buffer.",
        "note": "The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "TechId",
            "type": "Op",
            "dir": "in",
            "range": "a valid TechId",
            "note": "The tech id."
        }],
        "example": [{
            "title": "Store the unique research name in the buffer.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-tech-name c: my-unique-research)\r\n\t(up-chat-data-to-all &quot;Tech: %s&quot; c: 7031232)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-store-object-name",
        "description": "Store the target object's type name in the internal buffer.",
        "note": "The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.",
        "section": "Action",
        "param": [],
        "example": [{
            "title": "Store the type name for object id 0 in the buffer.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-target-by-id c: 0)\r\n\t(up-store-object-name)\r\n\t(up-chat-data-to-all &quot;Object: %s&quot; c: 7031232)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-store-map-name",
        "description": "Store the current map name in the internal buffer.",
        "note": "For rms, this is the filename of the map. However, if the map is a dynamic loader, such as Full Random, Random Land Map, or Blind Random, this will be the loader name instead of the actual map name. For scenarios, this will be the original save filename instead of the current filename. The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.",
        "section": "Action",
        "param": [{
            "name": "Extension",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to include the map file extension."
        }],
        "example": [{
            "title": "Store the current map name in the buffer.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-map-name 0)\r\n\t(up-chat-data-to-all &quot;Map: %s&quot; c: 7031232)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-clean-search",
        "description": "Removes duplicate ids or sorts the search results.",
        "note": "If ObjectData is set to -1, this will attempt to remove duplicates, lowering the result total. When removing duplicates, using search-order-none to preserve the existing order may perform slower than with asc/desc. If you wish to sort by ObjectData, it's best to remove duplicates first. Depending on the number of objects in the list, this command may be expensive, so please take care.",
        "section": "Action",
        "param": [{
            "name": "SearchSource",
            "type": "Const",
            "dir": "in",
            "range": "search-local or search-remote",
            "note": "The search source to modify."
        }, {
            "name": "ObjectData",
            "type": "Const",
            "dir": "in",
            "range": "a value from the ObjectData enumeration",
            "note": "The type of data to retrieve or -1 to enable duplicate removal."
        }, {
            "name": "SearchOrder",
            "type": "Const",
            "dir": "in",
            "range": "a const from the SearchOrder enumeration",
            "note": "The sort order."
        }],
        "example": [{
            "title": "Clean the remote search results, ordered by oldest object to newest. After that, sort the list by hitpoints.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-clean-search search-remote -1 search-order-asc)\r\n\t(up-clean-search search-remote object-data-hitpoints search-order-asc)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-remove-objects",
        "description": "Removes objects from the search results based on specific data.",
        "note": "If ObjectData is set to -1, the object index in the search results will be used for data comparison when performing removal.",
        "section": "Action",
        "param": [{
            "name": "SearchSource",
            "type": "Const",
            "dir": "in",
            "range": "search-local or search-remote",
            "note": "The search source to modify."
        }, {
            "name": "ObjectData",
            "type": "Const",
            "dir": "in",
            "range": "a value from the ObjectData enumeration",
            "note": "The type of data to retrieve or -1 to use the object index."
        }, {
            "op": "type"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "The amount of resources."
        }],
        "example": [{
            "title": "Remove objects from the local search results with less than 20 hitpoints.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-remove-objects search-local object-data-hitpoints < 20)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-point-contains",
        "description": "Get the id if an object exists at a point goal pair position.",
        "note": "Set Point to 0 to use the point that is stored by up-set-target-point. Please note that when used with all-units-class (-1), this may capture unexpected objects like birds flying over a tile, terrain plants, etc. This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "name": "Id",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "The zero-based id of the object."
        }, {
            "op": "type"
        }, {
            "name": "ObjectId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId or BuildingId",
            "note": "The object to check."
        }],
        "example": [{
            "title": "Get the id of a tree if it exists at the map center.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defconst gl-tree-id 102)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-get-point-contains gl-center-x gl-tree-id c: tree-class) ; tree-class = 915\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-point-explored",
        "description": "Check if a point on the map has been explored.",
        "note": "Set Point to 0 to use the point that is stored by up-set-target-point.",
        "section": "Fact",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "type"
        }, {
            "name": "ExploredState",
            "type": "Op",
            "dir": "in",
            "range": "explored-no, explored-yes, or explored-active",
            "note": "The exploration state of the point."
        }],
        "example": [{
            "title": "Check if the map center point has been explored.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-explored gl-center-x != explored-no)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-point-elevation",
        "description": "Get the elevation for a tile with a point goal pair.",
        "note": "",
        "section": "Action",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the result or -2 to indicate failure."
        }],
        "example": [{
            "title": "Get the elevation at the map center.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defconst gl-center-z 200)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-get-point-elevation gl-center-x gl-center-z)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-point-elevation",
        "description": "Check the elevation for a tile with a point goal pair.",
        "note": "",
        "section": "Fact",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        }],
        "example": [{
            "title": "Check the elevation at the map center.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-elevation gl-center-x > 1)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-point-zone",
        "description": "Get the zone for a tile with a point goal pair.",
        "note": "Zone ids may differ if you have no villagers.",
        "section": "Action",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the result or -2 to indicate failure."
        }],
        "example": [{
            "title": "Get the zone at the map center.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defconst gl-center-z 200)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-get-point-zone gl-center-x gl-center-z)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-point-zone",
        "description": "Check the zone for a tile with a point goal pair.",
        "note": "Zone ids may differ if you have no villagers.",
        "section": "Fact",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        }],
        "example": [{
            "title": "Check the zone at the map center.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-zone gl-center-x > 1)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-bound-point",
        "description": "Copy a point goal pair and shift it into the map bounds.",
        "note": "",
        "section": "Action",
        "param": [{
            "name": "Point1",
            "type": "Goal",
            "dir": "out",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to store the (x,y) pair."
        }, {
            "name": "Point2",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }],
        "example": [{
            "title": "Copy and shift a point into the map bounds.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-store-x 200)\r\n(defconst gl-store-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-object gl-point-x)\r\n\t(up-bound-point gl-store-x gl-point-x)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-bound-precise-point",
        "description": "Bound a point goal pair inside the map with additional control.",
        "note": "Please ensure that Border is a valid value and will not cause an overflow for the map size. If Precise is used, the map size will be multiplied by 100 before bounding, so the border should be adjusted accordingly.",
        "section": "Action",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "io",
            "range": "an extended GoalId from 41 to 510",
            "note": "The first of 2 consecutive goals to read and store the (x,y) pair."
        }, {
            "name": "Precise",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to bound as a precise point (x100)."
        }, {
            "op": "type"
        }, {
            "name": "Border",
            "type": "Op",
            "dir": "in",
            "range": "0 to 32767",
            "note": "The border width for bounding the point."
        }],
        "example": [{
            "title": "Bound a point inside the map with a 10 tile border.",
            "data": "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-object gl-point-x)\r\n\t(up-bound-precise-point gl-point-x 0 c: 10)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-path-distance",
        "description": "Get the distance from the target object to a specified point goal pair.",
        "note": "This will return 65535 if the point is unreachable.",
        "section": "Action",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "name": "Strict",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to require an open destination tile or 0 to allow for a few tiles of separation."
        }, {
            "name": "Data",
            "type": "Goal",
            "dir": "out",
            "range": "a valid GoalId",
            "note": "Stores the result or -2 to indicate failure."
        }],
        "example": [{
            "title": "Get the path distance to the map center.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defconst gl-distance 200)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-get-path-distance gl-center-x 0 gl-distance)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-path-distance",
        "description": "Check the distance from the target object to a specified point goal pair.",
        "note": "The distance will be 65535 if the point is unreachable.",
        "section": "Fact",
        "param": [{
            "name": "Point",
            "type": "Goal",
            "dir": "in",
            "range": "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
            "note": "The first of 2 consecutive goals to read an (x,y) pair."
        }, {
            "name": "Strict",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to require an open destination tile or 0 to allow for a few tiles of separation."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        }],
        "example": [{
            "title": "Check if the stored object can reach the specified point.",
            "data": "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-path-distance gl-center-x 0 != 65535)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-reset-group",
        "description": "Clear all units in a search group.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "GroupId",
            "type": "Op",
            "dir": "in",
            "range": "0 to 9",
            "note": "The group id."
        }],
        "example": [{
            "title": "Reset the first search group.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-group c: 0)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-create-group",
        "description": "Create a search group from the local search results.",
        "note": "If there are no units available in the results list to create the specified group, the group will be cleared in the same way as up-reset-group.",
        "section": "Action",
        "param": [{
            "name": "Index",
            "type": "Goal",
            "dir": "in",
            "range": "a valid GoalId, or 0 for index 0",
            "note": "The zero-based index of the first local search result."
        }, {
            "name": "Count",
            "type": "Goal",
            "dir": "in",
            "range": "a valid GoalId, or 0 for count 40",
            "note": "The maximum number of objects."
        }, {
            "op": "type"
        }, {
            "name": "GroupId",
            "type": "Op",
            "dir": "in",
            "range": "0 to 9",
            "note": "The group id."
        }],
        "example": [{
            "title": "Create a search group of up to 10 villagers.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-search 1 1 1 1)\r\n\t(up-reset-filters)\r\n\t(up-find-local c: villager-class c: 10)\r\n\t(up-create-group 0 0 c: 0)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-set-group",
        "description": "Set the local or remote search results to a search group.",
        "note": "",
        "section": "Action",
        "param": [{
            "name": "SearchSource",
            "type": "Const",
            "dir": "in",
            "range": "search-local or search-remote",
            "note": "The search source to modify."
        }, {
            "op": "type"
        }, {
            "name": "GroupId",
            "type": "Op",
            "dir": "in",
            "range": "0 to 9",
            "note": "The group id."
        }],
        "example": [{
            "title": "Set the local results to the first search group.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-group search-local c: 0)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-group-size",
        "description": "Check the current number of units in a search group.",
        "note": "",
        "section": "Fact",
        "param": [{
            "op": "type"
        }, {
            "name": "GroupId",
            "type": "Op",
            "dir": "in",
            "range": "0 to 9",
            "note": "The group id."
        }, {
            "op": "compare"
        }, {
            "name": "Value",
            "type": "Op",
            "dir": "in",
            "range": "-32768 to 32767",
            "note": "A number for comparison."
        }],
        "example": [{
            "title": "Check if the first search group has units.",
            "data": "(defrule\r\n\t(up-group-size c: 0 > 0)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-get-group-size",
        "description": "Get the current number of units in a search group.",
        "note": "",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "GroupId",
            "type": "Op",
            "dir": "in",
            "range": "0 to 9",
            "note": "The group id."
        }, {
            "name": "Size",
            "type": "Goal",
            "dir": "out",
            "range": "a GoalId",
            "note": "Stores the group size."
        }],
        "example": [{
            "title": "Get the first search group's size.",
            "data": "(defconst gl-size 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-group-size c: 0 gl-size)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-modify-group-flag",
        "description": "Modify the ctrl group flag for units in a search group.",
        "note": "You must manage the group flag carefully in order to avoid unexpected situations. Please remove the group flag before modifying a flagged search group. You can find units from a flagged search group using object-data-group-flag, which is set to the group id.",
        "section": "Action",
        "param": [{
            "name": "On",
            "type": "Const",
            "dir": "in",
            "range": "0 or 1",
            "note": "Set to 1 to append or 0 to remove."
        }, {
            "op": "type"
        }, {
            "name": "GroupId",
            "type": "Op",
            "dir": "in",
            "range": "0 to 9",
            "note": "The group id."
        }],
        "example": [{
            "title": "Set the group id flag for units in search group id 2.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-modify-group-flag 1 c: 2) ; object-data-group-flag will be 2\r\n)"
        }],
        "related": []
    }, {
        "name": "up-filter-status",
        "description": "Set the object status value for use with up-find-status.",
        "note": "The default (after up-reset-filters) is 2, which should match most active objects. Buildings that are incomplete have a status of 0, while certain resources have a status of 3. For remote search, up-find-remote can match enemy status values 0 to 3 if you search by object type id instead of class id.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "ObjectStatus",
            "type": "Op",
            "dir": "in",
            "range": "a value from the ObjectStatus enumeration",
            "note": "The status value for matching."
        }, {
            "op": "type"
        }, {
            "name": "ObjectList",
            "type": "Op",
            "dir": "in",
            "range": "a value from the ObjectList enumeration",
            "note": "The list to search for local or allied objects (remote objects are handled separately)."
        }],
        "example": [{
            "title": "Configure the system and search for only incomplete castles.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-status c: status-pending c: list-active)\r\n\t(up-find-status-local c: castle c: 5)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-find-status-local",
        "description": "Find objects owned by the local player filtered by status.",
        "note": "This is identical to up-find-local, except it will consider the status value set by up-filter-status. If UnitId changes, the search index offset will be reset. Otherwise, it will continue from where it left off. This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The unit type that will be selected."
        }, {
            "op": "type"
        }, {
            "name": "Count",
            "type": "Op",
            "dir": "in",
            "range": "0 to 240",
            "note": "The number of results to find."
        }],
        "example": [{
            "title": "Find up to 20 infantry units owned by the player.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-status c: status-ready c: list-active)\r\n\t(up-find-status-local c: infantry-class c: 20) ; infantry-class = 906\r\n)"
        }],
        "related": []
    }, {
        "name": "up-find-status-remote",
        "description": "Find objects owned by the focus player for direct targeting.",
        "note": "Set sn-focus-player-number before using this command. This is identical to up-find-remote, except it will consider the status value set by up-filter-status. If the focus or UnitId changes, the search index offset will be reset. Otherwise, it will continue from where it left off. This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "UnitId",
            "type": "Op",
            "dir": "in",
            "range": "a UnitId",
            "note": "The unit type that will be selected."
        }, {
            "op": "type"
        }, {
            "name": "Count",
            "type": "Op",
            "dir": "in",
            "range": "0 to 240",
            "note": "The number of results to find."
        }],
        "example": [{
            "title": "Find up to 4 castles owned by the enemy, player 2.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-focus-player-number 2)\r\n\t(up-find-status-remote c: castle c: 4)\r\n)"
        }],
        "related": []
    }, {
        "name": "up-find-resource",
        "description": "Find gatherable resource objects for direct targeting.",
        "note": "This command stores data in the remote list and it will consider the status value set by up-filter-status. To find stone, gold, fallen trees, and other directly gatherable resources, status-resource is required. For standing trees and living objects, status-ready is required. Please ensure the proper status is set before searching. The remote index will reset automatically when switching between this command and other remote search commands like up-find-remote. If Resource changes, the search index offset will be reset. Otherwise, it will continue from where it left off. This command can be used as either a Fact or an Action.",
        "section": "Action",
        "param": [{
            "op": "type"
        }, {
            "name": "Resource",
            "type": "Op",
            "dir": "in",
            "range": "food, wood, stone, gold, or the UnitId of a food resource",
            "note": "The resource to find."
        }, {
            "op": "type"
        }, {
            "name": "Count",
            "type": "Op",
            "dir": "in",
            "range": "0 to 240",
            "note": "The number of results to find."
        }],
        "example": [{
            "title": "Find 2 sighted gold mines and store them in remote results.",
            "data": "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-full-reset-search)\r\n\t(up-filter-status c: status-resource c: list-active)\r\n\t(up-find-resource c: gold c: 2)\r\n)"
        }],
        "related": []
    }],
    "numbers": [{
        "id": 0,
        "name": "sn-percent-civilian-explorers",
        "default": 34,
        "prefer": 34,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 3, 35, 18 ],
        "related": [ 1, 2 ],
        "notes": "Controls the normal, formula-based percentage of civilian explorers allocated."
    }, {
        "id": 1,
        "name": "sn-percent-civilian-builders",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 4, 253 ],
        "related": [ 0, 2 ],
        "notes": "Controls the normal, formula-based percentage of builders allocated."
    }, {
        "id": 2,
        "name": "sn-percent-civilian-gatherers",
        "default": 66,
        "prefer": 66,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 5 ],
        "related": [ 0, 1 ],
        "notes": "Controls the normal, formula-based percentage of gatherers allocated."
    }, {
        "id": 3,
        "name": "sn-cap-civilian-explorers",
        "default": 2,
        "prefer": 2,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 0, 35, 18 ],
        "related": [ 4, 5 ],
        "notes": "Caps the number of civilian explorers allocated. Factored in after the percentage is calculated. Ignored when set to -1."
    }, {
        "id": 4,
        "name": "sn-cap-civilian-builders",
        "default": 2,
        "prefer": 2,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, however it must be at least 6-7 at all times, 10 if you will build walls, and 40-50 for wonder construction (100+ is recommended)",
        "version": "1.0c",
        "linked": [ 1, 253 ],
        "related": [ 3, 5 ],
        "notes": "Caps the number of builders allocated. Factored in after the percentage is calculated. Ignored when set to -1, causing all construction to be blocked."
    }, {
        "id": 5,
        "name": "sn-cap-civilian-gatherers",
        "default": -1,
        "prefer": -1,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 2 ],
        "related": [ 3, 4 ],
        "notes": "Caps the number of gatherers allocated. Factored in after the percentage is calculated. Ignored when set to -1."
    }, {
        "id": 6,
        "name": "unknown-data-006",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 7,
        "name": "unknown-data-007",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 8,
        "name": "unknown-data-008",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 9,
        "name": "unknown-data-009",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 10,
        "name": "unknown-data-010",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 11,
        "name": "unknown-data-011",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 12,
        "name": "unknown-data-012",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 13,
        "name": "unknown-data-013",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 14,
        "name": "unknown-data-014",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 15,
        "name": "unknown-data-015",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 16,
        "name": "sn-minimum-attack-group-size",
        "default": 4,
        "prefer": 4,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 26, 36 ],
        "related": [ 58, 60, 59, 94, 93, 41, 98 ],
        "notes": "Sets the minimum size of land-based attack groups. A group must meet its minimum size as one of the tasking prerequisites. The game can change this itself during the game."
    }, {
        "id": 17,
        "name": "unknown-data-017",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 18,
        "name": "sn-total-number-explorers",
        "default": 4,
        "prefer": 4,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 42, 61 ],
        "related": [ 3, 0, 35 ],
        "notes": "Caps the total number of land explorers allocated. Factored in after the percentage of civilian explorers is calculated and the soldier groups are set up. Ignored when set to -1."
    }, {
        "id": 19,
        "name": "sn-percent-enemy-sighted-response",
        "default": 50,
        "prefer": 50,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 20, 284 ],
        "related": [ 34 ],
        "notes": "Sets the percentage of idle troops that will respond to another unit being attacked."
    }, {
        "id": 20,
        "name": "sn-enemy-sighted-response-distance",
        "default": 25,
        "prefer": 50,
        "min": -32767,
        "max": 50,
        "rmin": 0,
        "rmax": 50,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 19, 284 ],
        "related": [ 34 ],
        "notes": "Sets the distance inside of which units will be candidates for response to an enemy attack."
    }, {
        "id": 21,
        "name": "unknown-data-021",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 22,
        "name": "sn-sentry-distance",
        "default": 12,
        "prefer": 12,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 72 ],
        "related": [ 57, 92 ],
        "notes": "Sets the distance at which the town is defended."
    }, {
        "id": 23,
        "name": "sn-relic-return-distance",
        "default": 10,
        "prefer": 10,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the distance that relics must be within to be considered returned to the Town Center."
    }, {
        "id": 24,
        "name": "sn-percent-victory-clamp",
        "default": 75,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 0,
        "available": "seems available, except for when teams-locked is disabled",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 25,
        "name": "sn-minimum-defend-group-size",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 28, 38 ],
        "related": [ 67, 69, 68 ],
        "notes": "Sets the minimum size of land-based defend groups. A group must meet its minimum size as one of the tasking prerequisites."
    }, {
        "id": 26,
        "name": "sn-maximum-attack-group-size",
        "default": 10,
        "prefer": 10,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 16, 36 ],
        "related": [ 58, 60, 59, 94, 93, 41, 98 ],
        "notes": "Sets the maximum size of land-based attack groups."
    }, {
        "id": 27,
        "name": "unknown-data-027",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 28,
        "name": "sn-maximum-defend-group-size",
        "default": 4,
        "prefer": 4,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 25, 38 ],
        "related": [ 67, 69, 68 ],
        "notes": "Sets the maximum size of land-based defend groups."
    }, {
        "id": 29,
        "name": "sn-minimum-peace-like-level",
        "default": 85,
        "prefer": 85,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the level at which computer players must like another player before allying with that player."
    }, {
        "id": 30,
        "name": "sn-percent-health-retreat",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 0,
        "available": "available, but avoid using it in conjunction with sn-scale-percent-health-retreat (95)",
        "version": "1.0c",
        "linked": [ 95 ],
        "related": [],
        "notes": "Sets the percentage of hit points that a group can lose (relative to what it started the attack with) before retreating. Must be &gt;= 1 and &lt;= 100."
    }, {
        "id": 31,
        "name": "sn-percent-death-retreat",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 0,
        "available": "available, but avoid using it in conjunction with sn-scale-percent-death-retreat (96)",
        "version": "1.0c",
        "linked": [ 96 ],
        "related": [],
        "notes": "Sets the percentage of units that a group can let die (relative to what it started the attack with) before retreating. Must be &gt;= 1 and &lt;= 100."
    }, {
        "id": 32,
        "name": "sn-percent-exploration-required",
        "default": 100,
        "prefer": 100,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 167, 179, 256 ],
        "related": [ 135, 136 ],
        "notes": "Sets the minimum amount of exploration that a computer player must have accomplished before being allowed to retask civilian explorers."
    }, {
        "id": 33,
        "name": "unknown-data-033",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 34,
        "name": "sn-zero-priority-distance",
        "default": 50,
        "prefer": 50,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 19, 20 ],
        "notes": "Sets the distance at which a computer player's order for a unit is set to a priority of 0."
    }, {
        "id": 35,
        "name": "sn-minimum-civilian-explorers",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 3, 0 ],
        "related": [ 18 ],
        "notes": "Sets a minimum number of civilian explorers."
    }, {
        "id": 36,
        "name": "sn-number-attack-groups",
        "default": 0,
        "prefer": 3,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 26, 16 ],
        "related": [ 58, 60, 59, 41, 98, 227, 247, 271 ],
        "notes": "Sets the desired number of land-based attack groups. Sn-percent-attack-soldiers generally works better."
    }, {
        "id": 37,
        "name": "sn-attack-group-makeup",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "seems available",
        "version": "1.0c",
        "linked": [],
        "related": [ 39, 45 ],
        "notes": ""
    }, {
        "id": 38,
        "name": "sn-number-defend-groups",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 28, 25 ],
        "related": [ 67, 69, 68 ],
        "notes": "Sets the desired number of land-based defend groups."
    }, {
        "id": 39,
        "name": "sn-defend-group-makeup",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 37, 45 ],
        "notes": ""
    }, {
        "id": 40,
        "name": "sn-group-fill-method",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": "seems available",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the method by which a computer player fills a group of units. There are two concepts here: single group fill and level group fill. In single group fill, all available units are put into the first non-minimally full group. Once that group is full, the next group is entirely filled before the third group is considered. In level group fill, all groups are filled at the same time (one unit is placed in the first group, the next in the second, etc.). The single group fill fills up to the minimum in each group, then goes to the level group fill. Both methods respect the maximum group sizes. 0 keys the single group fill, and 1 keys the level group fill. Must be 0 or 1."
    }, {
        "id": 41,
        "name": "sn-attack-group-gather-spacing",
        "default": 4,
        "prefer": 4,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 98, 36, 26, 16, 58, 60, 59 ],
        "notes": "Controls the relative proximity (to the group gather point) that grouped units must be in before the group is considered gathered."
    }, {
        "id": 42,
        "name": "sn-number-explore-groups",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 44, 43 ],
        "related": [ 61, 63, 62, 18 ],
        "notes": "Sets the desired number of land-based soldier exploration groups."
    }, {
        "id": 43,
        "name": "sn-minimum-explore-group-size",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 1,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 44, 42 ],
        "related": [ 61, 63, 62, 18 ],
        "notes": "Sets the minimum size of land-based soldier exploration groups. A group must meet its minimum size as one of the tasking prerequisites."
    }, {
        "id": 44,
        "name": "sn-maximum-explore-group-size",
        "default": 1,
        "prefer": 3,
        "min": -32767,
        "max": 1,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 43, 42 ],
        "related": [ 61, 63, 62, 18 ],
        "notes": "Sets the maximum size of land-based soldier exploration groups."
    }, {
        "id": 45,
        "name": "sn-explore-group-makeup",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 37, 39 ],
        "notes": ""
    }, {
        "id": 46,
        "name": "sn-attack-separation-time",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "seems available, but leave it for later",
        "version": "1.0c",
        "linked": [ 102 ],
        "related": [ 48, 71 ],
        "notes": "Sets the amount of time that must pass between computer player attacks. Must be &gt;= 0."
    }, {
        "id": 47,
        "name": "sn-attack-coordination",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 2,
        "network": 0,
        "defined": 0,
        "available": "seems available, but leave it for later",
        "version": "1.0c",
        "linked": [],
        "related": [ 103 ],
        "notes": "Selects the type of coordination between computer player attacks. 0 means no coordination. 1 means that one group may attack at a time. 2 means that multiple groups may attack at the same time. Must be &gt;= 0 and &lt;= 2."
    }, {
        "id": 48,
        "name": "sn-attack-response-separation-time",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "seems available, but leave it for later",
        "version": "1.0c",
        "linked": [],
        "related": [ 46, 71 ],
        "notes": "Sets the amount of time that must pass before units respond to a subsequent enemy attack distress call. Must be &gt;= 0."
    }, {
        "id": 49,
        "name": "sn-retreat-after-target-destroyed",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 3,
        "network": 0,
        "defined": 0,
        "available": "seems available, but leave it for later",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Selects what happens when a target is destroyed during an attack. 0 means that the attack group will never retreat and will recenter upon their current position. 1 means that the group will retreat if no other target is reachable. 2 means that the group will always retreat when the target is destroyed. 3 means that the group will go into extermination mode; they will explore unexplored territory and attack any enemies units they uncover. Must be &gt;= 0 and &lt;= 3."
    }, {
        "id": 50,
        "name": "sn-gold-defend-priority",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 56, 70, 52, 51, 55, 54, 53, 287 ],
        "notes": "Sets the priority of defending gold. A priority of 0 means that gold will not be defended. A priority of 1 means that gold has the highest defend priority."
    }, {
        "id": 51,
        "name": "sn-stone-defend-priority",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 56, 70, 52, 50, 55, 54, 53, 287 ],
        "notes": "Sets the priority of defending stone."
    }, {
        "id": 52,
        "name": "sn-forage-defend-priority",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 56, 70, 51, 50, 55, 54, 53, 287 ],
        "notes": "Sets the priority of defending forage sites."
    }, {
        "id": 53,
        "name": "sn-choke-point-defend-priority",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 56, 70, 52, 51, 50, 55, 54, 287 ],
        "notes": "Sets the priority of defending choke points."
    }, {
        "id": 54,
        "name": "sn-ruins-defend-priority",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 7,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 56, 70, 52, 51, 50, 55, 53, 287 ],
        "notes": "Sets the priority of defending ruins."
    }, {
        "id": 55,
        "name": "sn-relic-defend-priority",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 7,
        "network": 0,
        "defined": 1,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 56, 70, 52, 51, 50, 54, 53, 287 ],
        "notes": "Sets the priority of defending relic carts."
    }, {
        "id": 56,
        "name": "sn-town-defend-priority",
        "default": 7,
        "prefer": 7,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 7,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 70, 52, 51, 50, 55, 54, 53, 287 ],
        "notes": "Sets the priority of defending the computer player's town."
    }, {
        "id": 57,
        "name": "sn-defense-distance",
        "default": 3,
        "prefer": 3,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 92, 22, 72 ],
        "notes": "Sets the distance at which items (town excluded) are defended."
    }, {
        "id": 58,
        "name": "sn-number-boat-attack-groups",
        "default": 0,
        "prefer": 2,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps",
        "version": "1.0c",
        "linked": [ 60, 59 ],
        "related": [ 36, 26, 16, 41, 98, 228, 247 ],
        "notes": "Sets the desired number of boat attack groups. Setting sn-percent-attack-boat usually works better."
    }, {
        "id": 59,
        "name": "sn-minimum-boat-attack-group-size",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps",
        "version": "1.0c",
        "linked": [ 60, 58 ],
        "related": [ 36, 26, 16, 94, 93, 41, 98 ],
        "notes": "Sets the minimum size of boat attack groups. A group must meet its minimum size as one of the tasking prerequisites."
    }, {
        "id": 60,
        "name": "sn-maximum-boat-attack-group-size",
        "default": 5,
        "prefer": 5,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps",
        "version": "1.0c",
        "linked": [ 59, 58 ],
        "related": [ 36, 26, 16, 94, 93, 41, 98 ],
        "notes": "Sets the maximum size of boat attack groups."
    }, {
        "id": 61,
        "name": "sn-number-boat-explore-groups",
        "default": 0,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps",
        "version": "1.0c",
        "linked": [ 63, 62 ],
        "related": [ 42, 44, 43, 18 ],
        "notes": "Sets the desired number of military boat exploration groups. This is not affected by sn-total-number-explorers."
    }, {
        "id": 62,
        "name": "sn-minimum-boat-explore-group-size",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps",
        "version": "1.0c",
        "linked": [ 63, 61 ],
        "related": [ 42, 44, 43, 18 ],
        "notes": "Sets the minimum size of boat exploration groups."
    }, {
        "id": 63,
        "name": "sn-maximum-boat-explore-group-size",
        "default": 2,
        "prefer": 2,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps",
        "version": "1.0c",
        "linked": [ 62, 61 ],
        "related": [ 42, 44, 43, 18 ],
        "notes": "Sets the maximum size of boat exploration groups."
    }, {
        "id": 64,
        "name": "sn-desired-number-trade-escorts",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the desired number of warboat escorts for tradeboats. Must be &gt;= 0."
    }, {
        "id": 65,
        "name": "sn-desired-number-fish-escorts",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the desired number of warboat escorts for fishing boats. Must be &gt;= 0."
    }, {
        "id": 66,
        "name": "sn-desired-number-transport-escorts",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the desired number of warboat escorts for transports. Must be &gt;= 0."
    }, {
        "id": 67,
        "name": "sn-number-boat-defend-groups",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps",
        "version": "1.0c",
        "linked": [ 69, 68 ],
        "related": [ 38, 28, 25 ],
        "notes": "Sets the desired number of boat defend groups."
    }, {
        "id": 68,
        "name": "sn-minimum-boat-defend-group-size",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps",
        "version": "1.0c",
        "linked": [ 69, 67 ],
        "related": [ 38, 28, 25 ],
        "notes": "Sets the minimum size of boat defend groups."
    }, {
        "id": 69,
        "name": "sn-maximum-boat-defend-group-size",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps",
        "version": "1.0c",
        "linked": [ 68, 67 ],
        "related": [ 38, 28, 25 ],
        "notes": "Sets the maximum size of boat defend groups."
    }, {
        "id": 70,
        "name": "sn-dock-defend-priority",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps",
        "version": "1.0c",
        "linked": [],
        "related": [ 56, 52, 51, 50, 55, 54, 53, 287 ],
        "notes": "Sets the priority of defending the dock."
    }, {
        "id": 71,
        "name": "sn-lock-attack-and-attack-response",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": "seems available",
        "version": "1.0c",
        "linked": [],
        "related": [ 46, 48 ],
        "notes": "This treats the sn-attack-separation-time and sn-attack-response-separation-time as the same numbers. Must be either 0 or 1."
    }, {
        "id": 72,
        "name": "sn-sentry-distance-variation",
        "default": 2,
        "prefer": 2,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 22 ],
        "related": [ 57, 92 ],
        "notes": "Sets the amount of allowable variation in the defense distances."
    }, {
        "id": 73,
        "name": "sn-minimum-town-size",
        "default": 12,
        "prefer": 12,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 74, 250 ],
        "related": [ 86, 87 ],
        "notes": "Sets the minimum size of a computer player town."
    }, {
        "id": 74,
        "name": "sn-maximum-town-size",
        "default": 20,
        "prefer": 20,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 73, 250 ],
        "related": [ 86, 87 ],
        "notes": "Sets the maximum size of a computer player town."
    }, {
        "id": 75,
        "name": "sn-group-commander-selection-method",
        "default": 3,
        "prefer": 3,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 3,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the method by which group commanders are selected. 0 selects the unit with the most hit points. 1 selects the unit with the fewest hit points. 2 selects the unit with the most range. The commander is set once during a group's creation and is only reset when the commander dies."
    }, {
        "id": 76,
        "name": "sn-consecutive-idle-unit-limit",
        "default": 15,
        "prefer": 15,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, but only before militarization",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the number of consecutive seconds that pass before a group is set to idle if all of its units are idle. This is only used during attack and retreat phases."
    }, {
        "id": 77,
        "name": "sn-target-evaluation-distance",
        "default": 50,
        "prefer": 50,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 122, 79, 78, 185, 80, 83, 90, 82, 123, 184 ],
        "related": [],
        "notes": "Sets the multiplier used for the distance rating in computer player target evaluation."
    }, {
        "id": 78,
        "name": "sn-target-evaluation-hitpoints",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 122, 79, 77, 185, 80, 83, 90, 82, 123, 184 ],
        "related": [],
        "notes": "Sets the multiplier used for the hit point rating in computer player target evaluation."
    }, {
        "id": 79,
        "name": "sn-target-evaluation-damage-capability",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 122, 77, 78, 185, 80, 83, 90, 82, 123, 184 ],
        "related": [],
        "notes": "Sets the multiplier used for the damage capability rating in computer player target evaluation."
    }, {
        "id": 80,
        "name": "sn-target-evaluation-kills",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 122, 79, 77, 78, 185, 83, 90, 82, 123, 184 ],
        "related": [],
        "notes": "Sets the multiplier used for the kill rating in computer player target evaluation."
    }, {
        "id": 81,
        "name": "sn-target-evaluation-ally-proximity",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ],
        "related": [],
        "notes": "Sets the multiplier used for the ally proximity (number of allies in range) rating in computer player target evaluation."
    }, {
        "id": 82,
        "name": "sn-target-evaluation-rof",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 123, 184 ],
        "related": [],
        "notes": "Sets the multiplier used for the rate of fire rating in computer player target evaluation."
    }, {
        "id": 83,
        "name": "sn-target-evaluation-randomness",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 90, 82, 123, 184 ],
        "related": [],
        "notes": "Sets the multiplier used for the randomness factor in computer player target evaluation."
    }, {
        "id": 84,
        "name": "sn-number-wall-gates",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "seems available, if you will not build walls",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the number of gates that must be left in the wall around a computer player's town. Must be &gt;= 0."
    }, {
        "id": 85,
        "name": "sn-size-wall-gates",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the size (in tiles) of the gates in the wall around a computer player's town. Must be &gt;= 0."
    }, {
        "id": 86,
        "name": "sn-camp-max-distance",
        "default": 25,
        "prefer": 25,
        "min": -32767,
        "max": 32768,
        "rmin": 7,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 260, 261, 248, 202 ],
        "related": [ 87, 74, 73, 266 ],
        "notes": "Sets the maximum distance that lumber camps and mining camps may be placed from a Town Center."
    }, {
        "id": 87,
        "name": "sn-mill-max-distance",
        "default": 100,
        "prefer": 100,
        "min": -32767,
        "max": 32768,
        "rmin": 4,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 248, 202 ],
        "related": [ 86, 260, 261, 74, 73, 266 ],
        "notes": "Sets the maximum distance that mills may be placed from a Town Center."
    }, {
        "id": 88,
        "name": "sn-tactical-update-frequency",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the number of seconds that pass between each tactical AI update. Must be &gt;= 0."
    }, {
        "id": 89,
        "name": "sn-target-evaluation-attack-attempts",
        "default": -25,
        "prefer": -25,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ],
        "related": [],
        "notes": "Sets the multiplier used for the attack attempts rating in computer player target evaluation."
    }, {
        "id": 90,
        "name": "sn-target-evaluation-range",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 82, 123, 184 ],
        "related": [],
        "notes": "Sets the multiplier used for the range rating in computer player target evaluation."
    }, {
        "id": 91,
        "name": "sn-percent-unit-health-retreat",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 0,
        "available": "available, but avoid using it in conjunction with sn-scale-percent-unit-health-retreat (97)",
        "version": "1.0c",
        "linked": [ 97 ],
        "related": [],
        "notes": "Sets the percentage of hit points that a unit can lose (relative to what it started the attack with) before retreating. Must be &gt;= 1 and &lt;= 100."
    }, {
        "id": 92,
        "name": "sn-defend-overlap-distance",
        "default": 5,
        "prefer": 5,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 57, 22, 72 ],
        "notes": "Sets the amount of influence that a defend group has. Defend groups will be assigned so that their circles of influence do not overlap."
    }, {
        "id": 93,
        "name": "sn-scale-minimum-attack-group-size",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 94, 16, 59 ],
        "related": [ 36, 26, 58, 60 ],
        "notes": "The scaling factor for the minimum attack group size. Added to sn-minimum-attack-group-size when the tactical AI does its scaling."
    }, {
        "id": 94,
        "name": "sn-scale-maximum-attack-group-size",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 93, 26, 60 ],
        "related": [ 36, 16, 58, 59 ],
        "notes": "The scaling factor for the maximum attack group size. Added to sn-minimum-attack-group-size when the tactical AI does its scaling."
    }, {
        "id": 95,
        "name": "sn-scale-percent-health-retreat",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "available, but avoid using it in conjunction with sn-percent-health-retreat (30)",
        "version": "1.0c",
        "linked": [ 30 ],
        "related": [],
        "notes": "The scaling factor for the percent health retreat. Added to sn-percent-health-retreat when the tactical AI does its scaling. Must be &gt;= -100 and &lt;= 100."
    }, {
        "id": 96,
        "name": "sn-scale-percent-death-retreat",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "available, but avoid using it in conjunction with sn-percent-death-retreat (31)",
        "version": "1.0c",
        "linked": [ 31 ],
        "related": [],
        "notes": "The scaling factor for the percent health retreat. Added to sn-percent-death-retreat when the tactical AI does its scaling. Must be &gt;= -100 and &lt;= 100."
    }, {
        "id": 97,
        "name": "sn-scale-percent-unit-health-retreat",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "available, but avoid using it in conjunction with sn-percent-unit-health-retreat (91)",
        "version": "1.0c",
        "linked": [ 91 ],
        "related": [],
        "notes": "The scaling factor for the percent health retreat. Added to sn-percent-unit-health-retreat when the tactical AI does its scaling. Must be &gt;= -100 and &lt;= 100."
    }, {
        "id": 98,
        "name": "sn-attack-group-size-randomness",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 41, 36, 26, 16, 58, 60, 59 ],
        "notes": "The randomness factor in the attack group size. This sets a cap on the amount of randomness in the minimum attack group size. The randomness factor is set once (when the group is created) and will be between 0 and this number."
    }, {
        "id": 99,
        "name": "sn-scaling-frequency",
        "default": 10,
        "prefer": 10,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the number of minutes that pass between each scaling inside the tactical AI."
    }, {
        "id": 100,
        "name": "sn-maximum-gaia-attack-response",
        "default": 3,
        "prefer": 3,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 225 ],
        "notes": "The maximum number of villagers that respond to another civilian getting attacked by a Gaia animal."
    }, {
        "id": 101,
        "name": "sn-build-frequency",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the number of tactical AI updates that pass between each training or research attempt."
    }, {
        "id": 102,
        "name": "sn-attack-separation-time-randomness",
        "default": 15,
        "prefer": 15,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "seems available, but it would be best to avoid it",
        "version": "1.0c",
        "linked": [ 46 ],
        "related": [ 48 ],
        "notes": "The amount of randomness incorporated into the attack separation time. Must be &gt;= 0 and &lt; sn-attack-separation-time."
    }, {
        "id": 103,
        "name": "sn-attack-intelligence",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 47 ],
        "notes": "Specifies whether the intelligent attack system is used. The intelligent attack system tries to avoid enemy units when attacking and tries to attack from different sides. When used with the sn-attack-coordination set to 2, this can create multifront attacks. Must be 0 (to turn off) and 1 (to turn on)."
    }, {
        "id": 104,
        "name": "sn-initial-attack-delay",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 134 ],
        "related": [],
        "notes": "The forced, initial delay before any computer player attacks (in seconds)."
    }, {
        "id": 105,
        "name": "sn-save-scenario-information",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 201 ],
        "notes": "Controls whether the learning information is saved at the end of the scenario for a given computer player. Must be 0 (to turn off) or 1 (to turn on)."
    }, {
        "id": 106,
        "name": "sn-special-attack-type1",
        "default": -1,
        "prefer": -1,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 109 ],
        "related": [ 107, 108 ],
        "notes": "Set to 1 to target monasteries and monks carrying relics."
    }, {
        "id": 107,
        "name": "sn-special-attack-type2",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 110 ],
        "related": [ 106, 108 ],
        "notes": "Set to any unit, building, or group id to direct attacks."
    }, {
        "id": 108,
        "name": "sn-special-attack-type3",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 111 ],
        "related": [ 106, 107 ],
        "notes": "Set to 1 to target wonders."
    }, {
        "id": 109,
        "name": "sn-special-attack-influence1",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 106 ],
        "related": [ 110, 111 ],
        "notes": "Sets the multiplier used for the special attack type 1 rating in computer player target evaluation. Must be &gt; 0 to influence the computer player toward attacking the special type 1, &lt; 0 to influence the computer player away from attacking the special type 1."
    }, {
        "id": 110,
        "name": "sn-special-attack-influence2",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [ 107 ],
        "related": [ 109, 111 ],
        "notes": "Sets the multiplier used for the special attack type 2 rating in computer player target evaluation. Must be &gt; 0 to influence the computer player toward attacking the special type 2, &lt; 0 to influence the computer player away from attacking the special type 2."
    }, {
        "id": 111,
        "name": "sn-special-attack-influence3",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "seems available, except under standard victory conditions",
        "version": "1.0c",
        "linked": [ 108 ],
        "related": [ 109, 110 ],
        "notes": "Sets the multiplier used for the special attack type 3 rating in computer player target evaluation. Must be &gt; 0 to influence the computer player toward attacking the special type 3, &lt; 0 to influence the computer player away from attacking the special type 3."
    }, {
        "id": 112,
        "name": "sn-minimum-water-body-size-for-dock",
        "default": 300,
        "prefer": 300,
        "min": -32767,
        "max": 32768,
        "rmin": 10,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, as long as the value will always be &gt;= 300",
        "version": "1.0c",
        "linked": [],
        "related": [ 169 ],
        "notes": "The minimum number of tiles (in surface area) that a body of water must be for a Dock to be placed on it."
    }, {
        "id": 113,
        "name": "unknown-data-113",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 114,
        "name": "sn-number-build-attempts-before-skip",
        "default": 25,
        "prefer": 25,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 115 ],
        "notes": "The maximum number of build attempts a build plan can go through before being put into skip mode."
    }, {
        "id": 115,
        "name": "sn-max-skips-per-attempt",
        "default": 10,
        "prefer": 10,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 114 ],
        "notes": "The maximum number of unbuilt items that can be skipped during any build plan processing before giving up (for being too far ahead of the current position in the plan)."
    }, {
        "id": 116,
        "name": "unknown-data-116",
        "default": 10,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 117,
        "name": "sn-food-gatherer-percentage",
        "default": 0,
        "prefer": 0,
        "min": 0,
        "max": 100,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 156 ],
        "related": [ 118, 119, 120 ],
        "notes": "Set to configure food gatherers: foodGatherers = ( this + sn-food-modifier-percentage ) * gathererTotal * 0.01 + 0.5."
    }, {
        "id": 118,
        "name": "sn-gold-gatherer-percentage",
        "default": 0,
        "prefer": 0,
        "min": 0,
        "max": 100,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 159 ],
        "related": [ 117, 119, 120 ],
        "notes": "Set to configure gold gatherers: goldGatherers = ( this + sn-gold-modifier-percentage ) * gathererTotal * 0.01 + 0.5."
    }, {
        "id": 119,
        "name": "sn-stone-gatherer-percentage",
        "default": 0,
        "prefer": 0,
        "min": 0,
        "max": 100,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 158 ],
        "related": [ 117, 118, 120 ],
        "notes": "Set to configure stone gatherers: stoneGatherers = ( this + sn-stone-modifier-percentage ) * gathererTotal * 0.01 + 0.5."
    }, {
        "id": 120,
        "name": "sn-wood-gatherer-percentage",
        "default": 0,
        "prefer": 0,
        "min": 0,
        "max": 100,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 157 ],
        "related": [ 117, 118, 119 ],
        "notes": "Set to configure wood gatherers: woodGatherers = ( this + sn-wood-modifier-percentage ) * gathererTotal * 0.01 + 0.5."
    }, {
        "id": 121,
        "name": "sn-defend-important-group-leaders",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls whether or not important attack group leaders are defended by the other group units. A value of 1 has the members defend the leader. A value of 0 does not."
    }, {
        "id": 122,
        "name": "sn-target-evaluation-continent",
        "default": 100,
        "prefer": 100,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ],
        "related": [],
        "notes": "Sets the additive value used for the targets on the same continent as the attack group commander. Must be &gt; 0 to influence the computer player toward attacking the units on the same continent or 0 for no special influence."
    }, {
        "id": 123,
        "name": "sn-target-evaluation-siege-weapon",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 184 ],
        "related": [],
        "notes": "Sets the additive value used for influencing siege weapons to attack stationary targets (and influencing non-siege weapons not to attack those stationary targets). Must be &gt; 0 to influence the computer player to use siege weapons to attack stationary targets or 0 for no special influence."
    }, {
        "id": 124,
        "name": "sn-tribute-amount",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the required amount of gold that must be tributed to the computer player. If this is 0, no computer player tributing is monitored for the special system (thus, the normal tribute system is in effect). When this value is &gt; 0, the computer player will expect some gold in tribute."
    }, {
        "id": 125,
        "name": "sn-tribute-chat-frequency",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the frequency (in seconds) of the computer player's chat messages asking for tribute. Must be &gt;= 0."
    }, {
        "id": 126,
        "name": "sn-tribute-chat-randomness",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the randomness (in seconds) of the computer player's chat messages asking for tribute. Must be &gt;= 0 and &lt; sn-tribute-chat-frequency."
    }, {
        "id": 127,
        "name": "sn-tribute-timeout",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the amount of time (in seconds) within which the tribute must take place. Must be &gt;= 0."
    }, {
        "id": 128,
        "name": "sn-tribute-player",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 8,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the player ID# of the player the computer player will target for the tribute request. Must be a valid player number for the game."
    }, {
        "id": 129,
        "name": "sn-tribute-success-outcome",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls what happens when the tribute request is fulfilled within the allotted time. If set to 0, nothing happens. If set to 1, the computer player will ally when the tribute amount is paid."
    }, {
        "id": 130,
        "name": "sn-tribute-failure-outcome",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls what happens when the tribute request is not fulfilled within the allotted time. If set to 0, nothing happens. If set to 1, the computer player will go to war when the tribute amount is not paid."
    }, {
        "id": 131,
        "name": "sn-group-leader-defense-distance",
        "default": 3,
        "prefer": 3,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the defense distance for defenders of an important attack group leader."
    }, {
        "id": 132,
        "name": "sn-tribute-persistence",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls whether or not the interactive tribute system operates once or forever. A value of 1 makes it last the entire game (i.e. the computer player will continue to demand sn-tribute-amount of gold for the entire game, at intervals roughly equivalent to sn-tribute-chat-frequency from the outcome evaluation). A value of 0 makes the interactive tribute occur one time."
    }, {
        "id": 133,
        "name": "sn-tribute-revoke-on-attack",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls whether or not the computer player rescinds the favorable tribute outcome when the sn-tribute-player attacks the computer player. A value of 1 has the computer player rescind, a value of 0 does not."
    }, {
        "id": 134,
        "name": "sn-initial-attack-delay-type",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 3,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 104 ],
        "related": [],
        "notes": "The type of initial attack delay. A value of 1 denotes a delay ended by the build list. A value of 2 uses the sn-initial-attack-delay timeout. A value of 3 allows the computer player to attack after he has been attacked by a non-Gaia player. A value of 0 allows any of the three occurrences to enable attacks."
    }, {
        "id": 135,
        "name": "sn-blot-exploration-map",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": "available, but only later, as it greatly influences exploration",
        "version": "1.0c",
        "linked": [ 136 ],
        "related": [ 167, 32, 179 ],
        "notes": "This controls whether or not the computer player re-explores previously explored regions. A value of 1 has the computer player re-explore, a value of 0 does not."
    }, {
        "id": 136,
        "name": "sn-blot-size",
        "default": 15,
        "prefer": 15,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": "available, but only later, as it greatly influences exploration",
        "version": "1.0c",
        "linked": [ 135 ],
        "related": [ 167, 32, 179 ],
        "notes": "This controls the size of the area that a computer player marks for re-exploration."
    }, {
        "id": 137,
        "name": "unknown-data-137",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 138,
        "name": "sn-add-starting-resource-food",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 139, 140, 141 ],
        "notes": "Cheat - adds extra food to starting resources."
    }, {
        "id": 139,
        "name": "sn-add-starting-resource-gold",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 138, 140, 141 ],
        "notes": "Cheat - adds extra gold to starting resources."
    }, {
        "id": 140,
        "name": "sn-add-starting-resource-stone",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 138, 139, 141 ],
        "notes": "Cheat - adds extra stone to starting resources."
    }, {
        "id": 141,
        "name": "sn-add-starting-resource-wood",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 138, 139, 140 ],
        "notes": "Cheat - adds extra wood to starting resources."
    }, {
        "id": 142,
        "name": "sn-intelligent-gathering",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 148, 149, 203 ],
        "notes": "Controls whether or not the intelligent gathering system is enabled."
    }, {
        "id": 143,
        "name": "sn-task-ungrouped-soldiers",
        "default": 1,
        "prefer": 0,
        "min": 1,
        "max": 1,
        "rmin": 0,
        "rmax": 1,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 232 ],
        "notes": "Controls whether or not ungrouped computer player soldiers get tasked to spread out and guard the computer player's general town area."
    }, {
        "id": 144,
        "name": "sn-target-evaluation-boat",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ],
        "related": [],
        "notes": "Sets the additive value used for influencing land units to attack or not attack boats. Must be &gt; 0 to influence land units to attack boats, 0 for no special influence, and less than 0 for aversion."
    }, {
        "id": 145,
        "name": "sn-number-enemy-objects-required",
        "default": 10,
        "prefer": 10,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "The count of the number of enemy objects the computer player must see before dropping the number of civilian explorers down to the minimum level."
    }, {
        "id": 146,
        "name": "sn-number-max-skip-cycles",
        "default": 50,
        "prefer": 50,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 147,
        "name": "sn-most-needed-resource-look-ahead",
        "default": 10,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "The number of build list objects the computer player will use to look ahead to tabulate the resources required. Only used for the dynamic gathering percentages. Must be &gt;= 0."
    }, {
        "id": 148,
        "name": "sn-retask-gather-amount",
        "default": 20,
        "prefer": 20,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 149 ],
        "related": [ 142, 203 ],
        "notes": "The minimum amount that a gatherer must gather before the computer player allows him to be retasked to another resource type. Some code may override this."
    }, {
        "id": 149,
        "name": "sn-max-retask-gather-amount",
        "default": 40,
        "prefer": 40,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 148 ],
        "related": [ 142, 203 ],
        "notes": "The maximum amount that a gatherer can be told to gather before being allowed to be retasked. Some code may override this."
    }, {
        "id": 150,
        "name": "sn-max-storage-pits",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "The maximum number of storage pits a computer player can build in one game. Must be &gt;= 0."
    }, {
        "id": 151,
        "name": "sn-max-granaries",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "The maximum number of granaries a computer player can build in one game. Must be &gt;= 0."
    }, {
        "id": 152,
        "name": "sn-house-overage",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "The number of Houses that a computer player will autobuild over the amount needed to support 50 units. Must be &gt;= 0."
    }, {
        "id": 153,
        "name": "unknown-data-153",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 154,
        "name": "unknown-data-154",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 155,
        "name": "sn-build-plan-divisions",
        "default": 10,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "seems available",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "The number of divisions a computer player will place in its build list (used to calculate gathering percentages). Must be &gt;= 1."
    }, {
        "id": 156,
        "name": "sn-food-modifier-percentage",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -100,
        "rmax": 100,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [ 117 ],
        "related": [ 157, 158, 159 ],
        "notes": "Set to configure food gatherers: foodGatherers = ( sn-food-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5."
    }, {
        "id": 157,
        "name": "sn-wood-modifier-percentage",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -100,
        "rmax": 100,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [ 120 ],
        "related": [ 156, 158, 159 ],
        "notes": "Set to configure wood gatherers: woodGatherers = ( sn-wood-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5."
    }, {
        "id": 158,
        "name": "sn-stone-modifier-percentage",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -100,
        "rmax": 100,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [ 119 ],
        "related": [ 156, 157, 159 ],
        "notes": "Set to configure stone gatherers: stoneGatherers = ( sn-stone-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5."
    }, {
        "id": 159,
        "name": "sn-gold-modifier-percentage",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -100,
        "rmax": 100,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [ 118 ],
        "related": [ 156, 157, 158 ],
        "notes": "Set to configure gold gatherers: goldGatherers = ( sn-gold-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5."
    }, {
        "id": 160,
        "name": "sn-max-build-plan-gatherer-percentage",
        "default": 50,
        "prefer": 50,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "The maximum percentage of gatherers that a computer player will task based on the pregame requirements of the build plan."
    }, {
        "id": 161,
        "name": "sn-required-first-building",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 4,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls what building a computer player must place first. 0: No restriction. 1: Either a Storage Pit or a granary. 2: A Storage Pit. 3: A Granary. 4: Both a Storage Pit and a Granary. Exceptions consist of a Town Center and sn-maximum-houses-before-dropsites."
    }, {
        "id": 162,
        "name": "unknown-data-162",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 163,
        "name": "sn-food-dropsite-distance",
        "default": 3,
        "prefer": 7,
        "min": -32767,
        "max": 32768,
        "rmin": 3,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 234, 235 ],
        "related": [ 164, 165, 166 ],
        "notes": "The maximum number of tiles a computer player likes to walk to drop off its food."
    }, {
        "id": 164,
        "name": "sn-wood-dropsite-distance",
        "default": 3,
        "prefer": 10,
        "min": -32767,
        "max": 32768,
        "rmin": 3,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 233 ],
        "related": [ 163, 165, 166 ],
        "notes": "The maximum number of tiles a computer player likes to walk to drop off its wood."
    }, {
        "id": 165,
        "name": "sn-stone-dropsite-distance",
        "default": 3,
        "prefer": 25,
        "min": -32767,
        "max": 32768,
        "rmin": 3,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 238 ],
        "related": [ 163, 164, 166 ],
        "notes": "The maximum number of tiles a computer player likes to walk to drop off its stone."
    }, {
        "id": 166,
        "name": "sn-gold-dropsite-distance",
        "default": 3,
        "prefer": 7,
        "min": -32767,
        "max": 32768,
        "rmin": 3,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 237 ],
        "related": [ 163, 164, 165 ],
        "notes": "The maximum number of tiles a computer player likes to walk to drop off its gold."
    }, {
        "id": 167,
        "name": "sn-initial-exploration-required",
        "default": 2,
        "prefer": 2,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 32, 179, 256 ],
        "related": [ 135, 136 ],
        "notes": "The percentage of the map that must be explored by a computer player before any building is allowed."
    }, {
        "id": 168,
        "name": "sn-random-placement-factor",
        "default": 50,
        "prefer": 50,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "A number that gets added into the placement of the computer player to randomize building placement (off of the calculated ideal)."
    }, {
        "id": 169,
        "name": "sn-required-forest-tiles",
        "default": 10,
        "prefer": 10,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 112 ],
        "notes": "The minimum number of forest tiles that a computer player must uncover before placing its first lumber camp."
    }, {
        "id": 170,
        "name": "sn-minimum-food",
        "default": 200,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 171, 172, 173 ],
        "notes": "The minimum amount of food a computer player likes to keep on hand. Must be &gt;= 0."
    }, {
        "id": 171,
        "name": "sn-minimum-wood",
        "default": 250,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 170, 172, 173 ],
        "notes": "The minimum amount of wood a computer player likes to keep on hand. Must be &gt;= 0."
    }, {
        "id": 172,
        "name": "sn-minimum-stone",
        "default": 150,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 170, 171, 173 ],
        "notes": "The minimum amount of stone a computer player likes to keep on hand. Must be &gt;= 0."
    }, {
        "id": 173,
        "name": "sn-minimum-gold",
        "default": 200,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 170, 171, 172 ],
        "notes": "The minimum amount of gold a computer player likes to keep on hand. Must be &gt;= 0."
    }, {
        "id": 174,
        "name": "sn-maximum-houses-before-dropsites",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "The maximum number of Houses that can be built before a dropsite is built. Must be &gt;= 0."
    }, {
        "id": 175,
        "name": "sn-specific-build-item-to-build",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "seems available",
        "version": "1.0c",
        "linked": [ 176 ],
        "related": [],
        "notes": "A specific build item that should be inserted into the computer player's list. Must be a valid building ID."
    }, {
        "id": 176,
        "name": "sn-specific-build-item-time",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "seems available",
        "version": "1.0c",
        "linked": [ 175 ],
        "related": [],
        "notes": "The time (in minutes) that the sn-specific-build-item-to-build should be inserted into. Must be &gt;= 0."
    }, {
        "id": 177,
        "name": "sn-unskippable-item-type",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "seems available",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Allows the computer player to not skip a particular item type during building. Must be a valid building ID."
    }, {
        "id": 178,
        "name": "sn-attack-diplomacy-impact",
        "default": 10,
        "prefer": 10,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": "available, except for when teams-locked is disabled",
        "version": "1.0c",
        "linked": [],
        "related": [ 215 ],
        "notes": "The impact (positive or negative) that a computer player injects into his diplomacy system when attacked."
    }, {
        "id": 179,
        "name": "sn-percent-half-exploration",
        "default": 30,
        "prefer": 30,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 167, 32, 256 ],
        "related": [ 135, 136 ],
        "notes": "The percentage of map exploration that allows the computer player to task down to half the number of explorers."
    }, {
        "id": 180,
        "name": "sn-auto-build-houses",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls whether the computer player can decide to build its houses by itself. Must be 0 or 1."
    }, {
        "id": 181,
        "name": "sn-upgrade-to-tool-age-asap",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 182, 183 ],
        "notes": "Controls whether or not the computer player will abandon all to upgrade to the Tool Age as soon as it becomes available for research. Must be 0 or 1."
    }, {
        "id": 182,
        "name": "sn-upgrade-to-bronze-age-asap",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 181, 183 ],
        "notes": "Controls whether or not the computer player will abandon all to upgrade to the Bronze Age as soon as it becomes available for research. Must be 0 or 1."
    }, {
        "id": 183,
        "name": "sn-upgrade-to-iron-age-asap",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 181, 182 ],
        "notes": "Controls whether or not the computer player will abandon all to upgrade to the Iron Age as soon as it becomes available for research. Must be 0 or 1."
    }, {
        "id": 184,
        "name": "sn-target-evaluation-time-kill-ratio",
        "default": 20,
        "prefer": 20,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123 ],
        "related": [],
        "notes": "The amount of influence the time to kill a target has in deciding what to attack."
    }, {
        "id": 185,
        "name": "sn-target-evaluation-in-progress",
        "default": 50,
        "prefer": 50,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 81, 89, 144, 122, 79, 77, 78, 80, 83, 90, 82, 123, 184 ],
        "related": [],
        "notes": "The amount of influence of continuing to attack a target already under attack."
    }, {
        "id": 186,
        "name": "sn-coop-demand-tribute-interval",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [ 187 ],
        "related": [],
        "notes": "Controls how often the computer player may demand tribute from his computer player allies (in seconds). Must be &gt;= 0."
    }, {
        "id": 187,
        "name": "sn-coop-demand-tribute-maximum",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [ 186 ],
        "related": [],
        "notes": "Controls the maximum amount a computer player may demand from his computer player allies at any one time. Must be &gt;= 1."
    }, {
        "id": 188,
        "name": "sn-attack-winning-player",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": "available, but only for 1v1 and Wonder Race games",
        "version": "1.0c",
        "linked": [ 195 ],
        "related": [ 249 ],
        "notes": "Controls whether or not the computer player will attack the winning player (if there is more than one to choose from)."
    }, {
        "id": 189,
        "name": "unknown-data-189",
        "default": 50,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 190,
        "name": "sn-maximum-food",
        "default": 3000,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 191, 192, 193 ],
        "notes": "Controls the maximum amount of food the computer player likes to have on hand. Must be &gt;= 0."
    }, {
        "id": 191,
        "name": "sn-maximum-wood",
        "default": 2000,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 190, 192, 193 ],
        "notes": "Controls the maximum amount of wood the computer player likes to have on hand. Must be &gt;= 0."
    }, {
        "id": 192,
        "name": "sn-maximum-stone",
        "default": 1500,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 190, 191, 193 ],
        "notes": "Controls the maximum amount of stone the computer player likes to have on hand. Must be &gt;= 0."
    }, {
        "id": 193,
        "name": "sn-maximum-gold",
        "default": 3000,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [ 190, 191, 192 ],
        "notes": "Controls the maximum amount of gold the computer player likes to have on hand. Must be &gt;= 0."
    }, {
        "id": 194,
        "name": "sn-coop-share-information",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 196, 197 ],
        "notes": "Controls whether or not allied computer players share information about what they uncover (this is not like Cartography; instead, it's analogous to two humans chatting)."
    }, {
        "id": 195,
        "name": "sn-attack-winning-player-factor",
        "default": 25,
        "prefer": 25,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, but only for 1v1 and Wonder Race games",
        "version": "1.0c",
        "linked": [ 188 ],
        "related": [ 249 ],
        "notes": "The influence the sn-attack-winning-player will have on deciding who to attack if it's set to 1."
    }, {
        "id": 196,
        "name": "sn-coop-share-attacking",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": "seems available, but only for 1v1 and Wonder Race games",
        "version": "1.0c",
        "linked": [ 197 ],
        "related": [ 194 ],
        "notes": "Controls whether allied computer players can attack to defend each other."
    }, {
        "id": 197,
        "name": "sn-coop-share-attacking-interval",
        "default": 120,
        "prefer": 120,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "seems available, but only for 1v1 and Wonder Race games",
        "version": "1.0c",
        "linked": [ 196 ],
        "related": [ 194 ],
        "notes": "Controls how often this computer player can ask another for help (in seconds)."
    }, {
        "id": 198,
        "name": "sn-percentage-explore-exterminators",
        "default": 50,
        "prefer": 50,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Determines how many of the computer player's soldier explore groups are set as extermination groups. Must be &gt;= 0 and &lt;= 100."
    }, {
        "id": 199,
        "name": "unknown-data-199",
        "default": 25,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 200,
        "name": "unknown-data-200",
        "default": 50,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 201,
        "name": "sn-track-player-history",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 105 ],
        "notes": "Decides whether or not a human player's tendencies are tracked or not."
    }, {
        "id": 202,
        "name": "sn-minimum-dropsite-buffer",
        "default": 25,
        "prefer": 25,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 86, 87, 260, 261 ],
        "related": [ 248 ],
        "notes": "Controls how far away a computer player will keep dropsites in relation to enemy town centers."
    }, {
        "id": 203,
        "name": "sn-use-by-type-max-gathering",
        "default": 0,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 142, 148, 149 ],
        "notes": "Controls whether or not logical, type-specific gatherer requirements are placed on the quantity of resources gatherers must collect before being allowed to be retasked."
    }, {
        "id": 204,
        "name": "sn-minimum-boar-hunt-group-size",
        "default": 5,
        "prefer": 5,
        "min": -32767,
        "max": 8,
        "rmin": 0,
        "rmax": 8,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 252, 244 ],
        "related": [ 235, 245 ],
        "notes": "The number of villagers a computer player must collect before allowing boars to be hunted for food."
    }, {
        "id": 205,
        "name": "sn-auto-build-dropsites",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls whether or not the computer player decides how and when to build storage pits and granaries. Must be 0 or 1."
    }, {
        "id": 206,
        "name": "sn-auto-build-farms",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls whether or not the computer player can use extra wood to build Farms once all of the build list buildings are constructed. Must be 0 or 1."
    }, {
        "id": 207,
        "name": "sn-auto-build-towers",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls whether or not the computer player can use extra stone to build towers. Must be 0 or 1."
    }, {
        "id": 208,
        "name": "sn-auto-build-docks",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls whether or not the computer player decides how and when to build Docks. Must be 0 or 1."
    }, {
        "id": 209,
        "name": "sn-auto-build-fishing-boats",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls whether or not the computer player decides how and when to build fishing boats. Must be 0 or 1."
    }, {
        "id": 210,
        "name": "sn-auto-build-transports",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls whether or not the computer player decides how and when to build transports. Must be 0 or 1."
    }, {
        "id": 211,
        "name": "unknown-data-211",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -32767,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": ""
    }, {
        "id": 212,
        "name": "sn-desired-number-docks",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "How many Docks the computer player wants in a given game. Must be &gt;= 0."
    }, {
        "id": 213,
        "name": "sn-desired-number-fishing-boats",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "How many fishing boats the computer player wants in a given game. Must be &gt;= 0."
    }, {
        "id": 214,
        "name": "sn-desired-number-transports",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "How many transports the computer player wants in a given game. Must be &gt;= 0."
    }, {
        "id": 215,
        "name": "sn-allow-diplomacy-change-on-ally-attack",
        "default": 1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": "seems available, except for when teams-locked is disabled",
        "version": "1.0c",
        "linked": [],
        "related": [ 217, 178 ],
        "notes": "Controls whether or not the computer player can change his alliance when attacked by an ally. Must be 0 or 1."
    }, {
        "id": 216,
        "name": "sn-minimum-amount-for-trading",
        "default": 50,
        "prefer": 50,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Controls how much of a resource a computer player must have before using it for trading."
    }, {
        "id": 217,
        "name": "sn-allow-diplomacy-change-on-tribute",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": "seems available, except for when teams-locked is disabled",
        "version": "1.0c",
        "linked": [],
        "related": [ 215 ],
        "notes": "Controls whether or not the computer player will allow his diplomacy to change when he receives tribute from a player. Must be 0 or 1."
    }, {
        "id": 218,
        "name": "sn-easiest-reaction-percentage",
        "default": 100,
        "prefer": 100,
        "min": 100,
        "max": 100,
        "rmin": 0,
        "rmax": 100,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 219 ],
        "related": [ 229 ],
        "notes": "Sets the effective reaction percentage (of normal LOS) a computer player unit will use in single-player Easiest level scenario or campaign games."
    }, {
        "id": 219,
        "name": "sn-easier-reaction-percentage",
        "default": 100,
        "prefer": 100,
        "min": 100,
        "max": 100,
        "rmin": 0,
        "rmax": 100,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 218 ],
        "related": [ 229 ],
        "notes": "Sets the effective reaction percentage (of normal LOS) a computer player unit will use in single-player easier scenario or campaign games."
    }, {
        "id": 220,
        "name": "sn-max-farms",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Caps the number of Farms a computer player will build. Must be &gt;= 0."
    }, {
        "id": 221,
        "name": "sn-hits-before-alliance-change",
        "default": 3,
        "prefer": 3,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": "available, except for when teams-locked is disabled",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the number of times a computer player will allow his units to be hit by an ally before allowing his diplomacy to be changed."
    }, {
        "id": 222,
        "name": "sn-max-towers",
        "default": 10,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": "seems available",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Caps the number of towers a computer player will build. Must be &gt;= 0. Starts at 0, changed to 10 after some time has elapsed."
    }, {
        "id": 223,
        "name": "sn-auto-build-warships",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Determines if the computer player is allowed to decide how and when to build warships. Must be 0 or 1."
    }, {
        "id": 224,
        "name": "sn-desired-number-warships",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 0,
        "available": 1,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "How many warships the computer player wants in a given game. Must be &gt;= 0."
    }, {
        "id": 225,
        "name": "sn-allow-civilian-defense",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 3,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ ],
        "related": [ 100, 258 ],
        "notes": "Set to 0 to disable civilian defense, 1 to defend against weak, non-ranged units, 2 for all weak units except warships and units faster than villagers, and 3 for all weak units except warships."
    }, {
        "id": 226,
        "name": "sn-number-forward-builders",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "The number of villagers a computer player uses to build outside of an enemy town. Forward builders refer specifically to those villagers that must board a Transport to cross over water that cannot otherwise be pathed, either because players are on islands, or because other forms of access have been walled-off. It is not necessary to specify forward builders, unless the villagers need to board a Transport."
    }, {
        "id": 227,
        "name": "sn-percent-attack-soldiers",
        "default": 75,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 228, 36, 247 ],
        "notes": "Sets the percentage of defense soldiers that will be sent into battle (modified for difficulty level) the next time attack-now is issued. All newly created soldiers are defense soldiers by default, and will remain defense soldiers until attack-now is issued. For example, if 10 soldiers were defending a town, and sn-percent-attack-soldiers was set to 50, then 5 soldiers will form an attack group and attack. This SN only needs to be set once, but it can be changed as needed. sn-percent-attack-soldiers works best when not using sn-number-defend-groups."
    }, {
        "id": 228,
        "name": "sn-percent-attack-boats",
        "default": 75,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 227, 58, 247 ],
        "notes": "Sets the percentage of defense boats that will be sent into battle (modified for difficulty level) the next time attack-now is issued. All newly created boats are defense boats by default, and will remain defense boats until attack-now is issued. Both attack soldiers and attack boats will attack when attack-now is issued. This SN only needs to be set once, but it can be changed as needed."
    }, {
        "id": 229,
        "name": "sn-do-not-scale-for-difficulty-level",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 218, 219 ],
        "notes": "Disables the automatic difficulty-scaling. See Level of Difficulty - Random Map Game. Default = 0."
    }, {
        "id": 230,
        "name": "sn-group-form-distance",
        "default": 20,
        "prefer": 20,
        "min": -32767,
        "max": 30,
        "rmin": 0,
        "rmax": 30,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Sets the distance over which attack soldiers will group. Set this value high if buildings that train military units are far apart."
    }, {
        "id": 231,
        "name": "sn-ignore-attack-group-under-attack",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to specify that defensive units should ignore attack groups under attack."
    }, {
        "id": 232,
        "name": "sn-gather-defense-units",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 239, 143 ],
        "notes": "Set to 1 to send units to defend buildings under construction."
    }, {
        "id": 233,
        "name": "sn-maximum-wood-drop-distance",
        "default": -1,
        "prefer": -1,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 164 ],
        "related": [ 234, 235, 236, 237, 238 ],
        "notes": "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be)."
    }, {
        "id": 234,
        "name": "sn-maximum-food-drop-distance",
        "default": -1,
        "prefer": -1,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 163, 235, 236 ],
        "related": [ 233, 237, 238 ],
        "notes": "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be)."
    }, {
        "id": 235,
        "name": "sn-maximum-hunt-drop-distance",
        "default": -1,
        "prefer": -1,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 234, 236 ],
        "related": [ 204, 252, 244, 245, 233, 237, 238 ],
        "notes": "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be)."
    }, {
        "id": 236,
        "name": "sn-maximum-fish-boat-drop-distance",
        "default": -1,
        "prefer": -1,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps, however if the value will always be large enough, it should be fine",
        "version": "1.0c",
        "linked": [ 234, 235 ],
        "related": [ 233, 237, 238 ],
        "notes": "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be). If set to 0, all fishing ships will explore the water."
    }, {
        "id": 237,
        "name": "sn-maximum-gold-drop-distance",
        "default": -1,
        "prefer": -1,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 166 ],
        "related": [ 233, 234, 235, 236, 238 ],
        "notes": "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be)."
    }, {
        "id": 238,
        "name": "sn-maximum-stone-drop-distance",
        "default": -1,
        "prefer": -1,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [ 165 ],
        "related": [ 233, 234, 235, 236, 237 ],
        "notes": "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be). By setting the parameters to the appropriate value it is possible to avoid having villagers walk all over the map to gather resources."
    }, {
        "id": 239,
        "name": "sn-gather-idle-soldiers-at-center",
        "default": -1,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.0c",
        "linked": [],
        "related": [ 232 ],
        "notes": "When set to 1, it will &quot;move&quot; the town defense gather point to the &quot;center&quot; (randomized +-6 tiles) of the map. No provision is made if the center is in an unreachable spot. When it's set, all idle and retreating units will try to go to the center. Useful for King of the Hill and similar variants to get the CP to group near the middle."
    }, {
        "id": 240,
        "name": "sn-garrison-rams",
        "default": 1,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": "available, if you will not create rams",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Set to 0 to turn off. When on, the CP AI tries (but doesn't always succeed) to put infantry units into rams before the attack group departs."
    }, {
        "id": 241,
        "name": "sn-do-not-transport-from-same-zone",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": "available, except for water maps requiring transport ships",
        "version": "1.0c",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to influence transport ship behavior."
    }, {
        "id": 242,
        "name": "sn-enable-new-building-system",
        "default": 0,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 243 ],
        "notes": "Set to 1 only once to request the new building system, featuring simultaneous construction and cancellation control."
    }, {
        "id": 243,
        "name": "sn-percent-building-cancellation",
        "default": 100,
        "prefer": 25,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 100,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 242 ],
        "notes": "Set to the maximum allowable completion percentage for building cancellation."
    }, {
        "id": 244,
        "name": "sn-enable-boar-hunting",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 2,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 204, 252 ],
        "related": [ 235, 245 ],
        "notes": "Set to 1 to target deer and boar; if it's set to 2, deer will be ignored."
    }, {
        "id": 245,
        "name": "sn-minimum-number-hunters",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 204, 252, 235, 244 ],
        "notes": "Set to force hunting. For best results when hunting boar, set this in conjunction with sn-minimum-boar-hunt-group-size."
    }, {
        "id": 246,
        "name": "sn-object-repair-level",
        "default": 16387,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32767,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Add bit flags together to generate a value: 0 = wonder; 1 = castle, monastery; 2 = town-center; 4 = barracks; 8 = archery-range; 16 = stable; 32 = siege-workshop; 64 = dock; 128 = market; 256 = university; 512 = blacksmith; 1024 = lumber-camp, mining-camp, mill; 2048 = house; 4096 = towers; 8192 = walls and gates; 16384 = siege weapons. For scenarios and campaigns, the default is 1 for compatibility."
    }, {
        "id": 247,
        "name": "sn-enable-patrol-attack",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 227, 228, 36, 58 ],
        "notes": "Set to 1 to enable the patrol-style local targeting system. When attacking a distant target, this causes units to retarget against nearby sighted units immediately instead of waiting until they are in proximity to the original target."
    }, {
        "id": 248,
        "name": "sn-dropsite-separation-distance",
        "default": 10,
        "prefer": 3,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 86, 87, 260, 261 ],
        "related": [ 202, 272 ],
        "notes": "Set to suggest the minimum distance between dropsites. Higher values can be useful for an escape camp when gatherers are under attack."
    }, {
        "id": 249,
        "name": "sn-target-player-number",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 8,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 188, 195, 250, 251 ],
        "notes": "Set to the number of the player that should be targeted for attack. If this sn is set to -1, initiating an attack will instead provide assistance to allies. When set to 0, sn-attack-winning-player will determine the target. Setting this to a player that cannot be attacked (an ally or the AI itself) will result in undefined behavior. You can also use this value with the &quot;target-player&quot; identifier in facts and actions."
    }, {
        "id": 250,
        "name": "sn-safe-town-size",
        "default": 255,
        "prefer": 40,
        "min": -32767,
        "max": 32768,
        "rmin": 1,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 74, 73 ],
        "related": [ 249, 255 ],
        "notes": "If an enemy building is inside both sn-maximum-town-size and the region specified by this sn, it will be targeted by defensive units. If the building is inside sn-maximum-town-size, but outside this region, it will be targeted only if it belongs to the player specified by sn-target-player-number."
    }, {
        "id": 251,
        "name": "sn-focus-player-number",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 8,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 249 ],
        "notes": "Set to any player number in order to use the &quot;focus-player&quot; identifier in facts and actions."
    }, {
        "id": 252,
        "name": "sn-minimum-boar-lure-group-size",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 8,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 204, 244 ],
        "related": [ 235, 245 ],
        "notes": "Set to the number of villagers that will be sent in the initial boar luring group."
    }, {
        "id": 253,
        "name": "sn-preferred-mill-placement",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 2,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Set to 0 for forage, 1 for deer, or 2 for shore fish."
    }, {
        "id": 254,
        "name": "sn-enable-offensive-priority",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 267 ],
        "notes": "Set to 1 to enable attack-now and attack groups to target using the priorities set by up-set-offense-priority."
    }, {
        "id": 255,
        "name": "sn-building-targeting-mode",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 2,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 74, 73 ],
        "related": [ 249, 250, 262 ],
        "notes": "Set to 0 to target all buildings, 1 to ignore walls and gates, or 2 to ignore walls, gates, and dropsites. Please avoid this strategic number, as you may experience targeting failures under certain circumstances."
    }, {
        "id": 256,
        "name": "sn-home-exploration-time",
        "default": 300,
        "prefer": 300,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 32768,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ ],
        "related": [ 167, 32, 179 ],
        "notes": "Set to the maximum amount of time, in seconds, that should be dedicated to exploring the home town center region."
    }, {
        "id": 257,
        "name": "sn-number-civilian-militia",
        "default": 10,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 200,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 258 ],
        "related": [ ],
        "notes": "Set to the maximum number of villagers who may be used to attack the enemy."
    }, {
        "id": 258,
        "name": "sn-allow-civilian-offense",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 2,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 257 ],
        "related": [ 225 ],
        "notes": "Set to 1 to allow villagers to participate as soldiers in town-size attacks. If set to 2, villagers will target enemy villagers and buildings even if defensive military units are available. If set to 0, villagers will only be sent to attack enemy forward towers, without murder holes."
    }, {
        "id": 259,
        "name": "sn-preferred-trade-distance",
        "default": 100,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Set to the preferred distance between local and remote trade buildings."
    }, {
        "id": 260,
        "name": "sn-lumber-camp-max-distance",
        "default": 0,
        "prefer": 25,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 86, 261, 248, 202 ],
        "related": [ 87, 74, 73 ],
        "notes": "Sets the maximum-town-size for lumber-camp placement, when non-zero. If set to 0, sn-camp-max-distance will be used instead."
    }, {
        "id": 261,
        "name": "sn-mining-camp-max-distance",
        "default": 0,
        "prefer": 25,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 86, 260, 248, 202 ],
        "related": [ 87, 74, 73 ],
        "notes": "Sets the maximum-town-size for mining-camp placement, when non-zero. If set to 0, sn-camp-max-distance will be used instead."
    }, {
        "id": 262,
        "name": "sn-wall-targeting-mode",
        "default": 0,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 255 ],
        "notes": "Set to 1 to allow military units to automatically target nearby walls and gates. If set to 0, they will likely be ignored."
    }, {
        "id": 263,
        "name": "sn-livestock-to-town-center",
        "default": 0,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to require livestock, such as sheep, to gather at the town center. If set to 0, they will gather at mills, as well."
    }, {
        "id": 264,
        "name": "sn-enable-training-queue",
        "default": 0,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to allow an additional unit to be queued at each building. If set to 0, buildings will train one unit at a time."
    }, {
        "id": 265,
        "name": "sn-ignore-tower-elevation",
        "default": 0,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to ignore elevation when placing towers. If set to 0, the AI will try to seek elevation advantage."
    }, {
        "id": 266,
        "name": "sn-town-center-placement",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 899,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 86, 87 ],
        "notes": "Set to the building type to emulate for town center placement. If set to 0, the town center will be placed as usual."
    }, {
        "id": 267,
        "name": "sn-disable-tower-priority",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 254 ],
        "notes": "Set to 1 to prevent the local targeting system from giving special priority to towers and other fortifications, including town centers and castles. If set to 0, these buildings will receive the usual special priority."
    }, {
        "id": 268,
        "name": "sn-placement-zone-size",
        "default": 20,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 255,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 269, 270 ],
        "related": [ 73, 74 ],
        "notes": "Set to the size of the tile zone used for forward and controlled building placement. All build commands store this value and the up-set-placement-data information with each successful call. For every pass that a building cannot be placed, its zone size will be increased from this starting point."
    }, {
        "id": 269,
        "name": "sn-placement-fail-delta",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -10,
        "rmax": 10,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 268, 270 ],
        "related": [ 73, 74 ],
        "notes": "Set to the value that will be added to the placement distance set by up-set-placement-data for every pass that a building cannot be placed."
    }, {
        "id": 270,
        "name": "sn-placement-to-center",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 268, 269 ],
        "related": [ 73, 74, 249, 188 ],
        "notes": "Set to 1 to force place-control to use the map center as the second point of reference for placement. The first point of reference is set with up-set-placement-data. If set to 0, the active target enemy's nearest building will become the second point of reference instead, once discovered. If sn-target-player-number is 0, the target enemy will be determined by sn-attack-winning-player."
    }, {
        "id": 271,
        "name": "sn-disable-attack-groups",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 277 ],
        "related": [ 36, 26, 16 ],
        "notes": "Set to 1 to disable automatic attack group targeting. Once groups are created, they can be used for defensive attack purposes using TSA. If set to 0, attack groups will perform offensive targeting as usual."
    }, {
        "id": 272,
        "name": "sn-allow-adjacent-dropsites",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 248 ],
        "notes": "Set to 1 to eliminate the standard requirement for a 1 tile buffer around mills, lumber camps, and mining camps. If set to 0, the 1 tile buffer is enforced as usual."
    }, {
        "id": 273,
        "name": "sn-defer-dropsite-update",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to defer the dropsite-min-distance update until construction is complete. If set to 0, the dropsite update occurs when the building is placed on the map."
    }, {
        "id": 274,
        "name": "sn-maximum-garrison-fill",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 20,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 275 ],
        "related": [],
        "notes": "Set to the number of units to fill into each garrison target per command. If set to 0, this limit is removed."
    }, {
        "id": 275,
        "name": "sn-number-garrison-units",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 40,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 274 ],
        "related": [],
        "notes": "Set to the number of units that will garrison per command. If set to 0, it will default to the maximum of 40."
    }, {
        "id": 276,
        "name": "sn-filter-under-attack",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 2,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Set to 1 or 2 to filter retreat commands to only those units that are under attack. When this is 2, units near threatened units will also be retreated, which may be computationally expensive. If set to 0, the filter is disabled."
    }, {
        "id": 277,
        "name": "sn-disable-defend-groups",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 15,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 271 ],
        "related": [],
        "notes": "Append flags to disable various defense systems: 1 to disable the defensive (TSA) targeting system, 2 to disable assistance inside sn-safe-town-size, 4 to disable assistance between sn-safe-town-size and sn-maximum-town-size, 8 to disable assistance outside sn-maximum-town-size. When assistance is disabled, please be aware that your units will only respond to attackers within their individual line of sight. If set to 0, units will respond to threats in town as usual."
    }, {
        "id": 278,
        "name": "sn-dock-placement-mode",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -1,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 279, 280, 281 ],
        "notes": "Set to 1 to prefer placement toward the front, -1 to prefer placement toward the back, or 0 for standard placement."
    }, {
        "id": 279,
        "name": "sn-dock-proximity-factor",
        "default": 10000,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -10000,
        "rmax": 10000,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 280 ],
        "related": [ 278 ],
        "notes": "Set to the proximity factor for docks to be placed relative to one another. Positive values prefer more distance, while negative values prefer less distance."
    }, {
        "id": 280,
        "name": "sn-dock-avoidance-factor",
        "default": 1000,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": -10000,
        "rmax": 10000,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 279 ],
        "related": [ 278 ],
        "notes": "Set to the avoidance factor for docks in the same zone (body of water). Positive values avoid placement in the same zone, while negative values prefer it."
    }, {
        "id": 281,
        "name": "sn-dock-training-filter",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 2,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [ 278 ],
        "notes": "Set to 1 or 2 to enable the intelligent dock training filter. This will prevent docks from training ships that would likely be useless in their body of water. If set to 1, docks will continue to train in seas that no longer contain recently sighted targets, while 2 will block training. If set to 0, docks will train units without additional consideration."
    }, {
        "id": 282,
        "name": "sn-free-siege-targeting",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 3,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Add bit flags together to generate a value: 1 = trebuchet; 2 = cannon-galleon. Set a flag for a unit to enable free offensive targeting with attack-now or attack groups. This may result in the targeting of units other than buildings. If set to 0, non-buildings will be ignored unless units must respond due to sn-enemy-sighted-response-distance."
    }, {
        "id": 283,
        "name": "sn-warship-targeting-mode",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 2,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to cause warships to target based on the unit with the shortest range in the group against fortifications. Set to 2 to eliminate the range check. If set to 0, warship groups will target based on the unit with the longest range."
    }, {
        "id": 284,
        "name": "sn-disable-sighted-response-cap",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [ 19, 20 ],
        "related": [],
        "notes": "Set to 1 to eliminate the cap of 50 on sn-enemy-sighted-response-distance. If set to 0, the cap will remain in effect for changes to sn-enemy-sighted-response-distance."
    }, {
        "id": 285,
        "name": "sn-disable-builder-assistance",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to prevent builders from assisting on nearby foundations after their work is complete. If set to 0, they will assist as usual."
    }, {
        "id": 286,
        "name": "sn-local-targeting-mode",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 2,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to prioritize attack bonuses and overall damage per hit. If set to 2, units will prioritize targets with high base pierce armor, such as rams; otherwise, they will target as usual. The offensive priority value of a target (-1 to 11) is added to the weight for modes 1 and 2, as well. If set to 0, units will target as usual."
    }, {
        "id": 287,
        "name": "sn-livestock-defend-priority",
        "default": 0,
        "prefer": 1,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.1",
        "linked": [],
        "related": [50, 56, 70, 52, 51, 55, 54, 53],
        "notes": "Set to 1 to allow sheep into the targetable sighted objects list."
    }, {
        "id": 288,
        "name": "sn-number-tasked-units",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 40,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.5",
        "linked": [],
        "related": [],
        "notes": "Set to the number of units to require per group tasked by up-target-objects or up-target-point. The last group sent by a command may not reach the minimum required number. It's possible that no units will be sent to some of the last remote targets. If set to 0, units will be spread in order to ensure balanced group sizes to all remote targets."
    }, {
        "id": 291,
        "name": "sn-disable-villager-garrison",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 3,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.5",
        "linked": [],
        "related": [],
        "notes": "Set to 3 to prevent villagers from auto-garrisoning for any reason. If set to 2, gaia is ignored and villagers will only garrison for enemy attacks if they can enter a town center. If set to 1, gaia is ignored and villagers will garrison for any enemy attacks. If set to 0, villagers will garrison as usual."
    }, {
        "id": 292,
        "name": "sn-target-point-adjustment",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 6,
        "network": 0,
        "defined": 1,
        "available": 0,
        "version": "1.5",
        "linked": [],
        "related": [],
        "notes": "Set to adjust the tile positioning of up-target-point toward 1:left, 2:top, 3:right, 4:bottom, 5:middle, 6:precise. If set to 0, actions will be directed to the absolute left-most point of a tile. If set to precise, you must directly pass a valid precise point goal pair (point x100 for precision) to up-target-point."
    }, {
        "id": 293,
        "name": "sn-unexplored-construction",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.5",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to allow the AI to construct buildings on unexplored tiles. If set to 0, the AI will have to directly explore tiles in order to build there as usual. Please do not enable this without #load-if-not-defined REVEAL-NORMAL."
    }, {
        "id": 294,
        "name": "sn-disable-trade-evasion",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 1,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.5",
        "linked": [],
        "related": [],
        "notes": "Set to 1 to prevent trade carts from abandoning their gold and trade route in order to evade attackers. If set to 0, trade carts will attempt to evade attackers as usual."
    }, {
        "id": 295,
        "name": "sn-boar-lure-destination",
        "default": 0,
        "prefer": 0,
        "min": -32767,
        "max": 32768,
        "rmin": 0,
        "rmax": 23,
        "network": 1,
        "defined": 1,
        "available": 0,
        "version": "1.5",
        "linked": [],
        "related": [],
        "notes": "Set to a <a href='http://i.imgur.com/GHXNTXU.png' target='_blank'>value from this image</a> to adjust the boar lure destination at the town center. Add 12 to the normal value (0 to 11) to shift the point down to the grid corner. If set to 0, lurers will attempt to reach the center tile of the town center."
    }]
}