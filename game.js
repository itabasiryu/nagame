(() => {
    // if (location.hostname === 'localhost') {
    //     localStorage.clear(); // 開発環境だけリセット
    //   }
    const schedules = {
        "1.mp4": [
            { time: 2, side: "right" },
            { time: 16, side: "right" },
            { time: 23, side: "right" },
            { time: 33.6, side: "right" },
            { time: 36, side: "right" },
            { time: 38.3, side: "right" },
            { time: 43, side: "right" },
            { time: 87, side: "left" },
            { time: 109.4, side: "left" },
            { time: 121, side: "right" },
            { time: 146.4, side: "right" },
            { time: 149.4, side: "left" },
            { time: 155.9, side: "left" },
            { time: 161.1, side: "right" },
            { time: 215.6, side: "right" },
            { time: 254.2, side: "right" },
            { time: 272.4, side: "right" },
            { time: 277, side: "right" },
            { time: 284.5, side: "right" },
            { time: 290, side: "left" },
            { time: 309.9, side: "left" },
            { time: 314.4, side: "left" },
            { time: 331.6, side: "right" },
            { time: 333.6, side: "left" }
        ],
        "2.mp4": [
            { time: 1, side: "right" },
            { time: 10.7, side: "right" },
            { time: 41, side: "right" },
            { time: 52.7, side: "right" },
            { time: 63.2, side: "left" },
            { time: 79, side: "left" },
            { time: 86.4, side: "right" },
            { time: 95.6, side: "left" },
            { time: 109, side: "left" }
        ],
        "3.mp4": [
            { time: 1.5, side: "right" },
            { time: 4.3, side: "right" },
            { time: 16.1, side: "left" },
            { time: 27.7, side: "left" },
            { time: 35.6, side: "right" },
            { time: 42, side: "right" },
            { time: 49, side: "left" },
            { time: 77.8, side: "left" },
            { time: 84.5, side: "left" },
            { time: 130, side: "right" },
            { time: 158.5, side: "right" },
            { time: 164.5, side: "left" },
            { time: 167.4, side: "right" },
            { time: 186.2, side: "left" },
            { time: 208.3, side: "left" },
            { time: 233, side: "right" }
        ],
        "4.mp4": [
            { time: 0.4, side: "right" },
            { time: 20.5, side: "right" },
            { time: 23, side: "right" },
            { time: 27.5, side: "right" },
            { time: 39.5, side: "right" },
            { time: 42, side: "left" },
            { time: 47.5, side: "right" },
            { time: 60.2, side: "left" },
            { time: 62.7, side: "left" },
            { time: 68.4, side: "right" },
            { time: 76.3, side: "right" },
            { time: 78.9, side: "left" },
            { time: 89.6, side: "left" }
        ],
        "5.mp4": [
            { time:2.3, side: "left" },
            { time:6.3, side: "right" },
            { time:9.5, side: "left" },
            { time:11.7, side: "right" },
            { time:13.7, side: "right" },
            { time:22.8, side: "left" },
            { time:30, side: "right" },
            { time:42, side: "right" },
            { time:75.3, side: "right" },
            { time:86.2, side: "left" },
            { time:102.7, side: "left" },
            { time:133.5, side: "right" },
            { time:142.8, side: "left" },
            { time:153.1, side: "right" },
            { time:173.8, side: "right" },
            { time:176.9, side: "left" },
            { time:184.7, side: "right" },
            { time:197.5, side: "right" },
            { time:204.2, side: "right" },
            { time:208.6, side: "right" },
            { time:215.4, side: "left" },
            { time:233.7, side: "right" },
            { time:264.2, side: "left" },
            { time:266.5, side: "left" },
            { time:274.6, side: "right" },
            { time:292.5, side: "right" },
            { time:297.8, side: "right" },
            { time:303.4, side: "left" },
            { time:312, side: "right" },
            { time:315.9, side: "left" },
            { time:322.8, side: "right" },
            { time:326.2, side: "right" },
            { time:328.5, side: "right" },
            { time:336, side: "right" },
            { time:340.3, side: "right" },
            { time:356, side: "right" },
            { time:370.1, side: "right" },
            { time:377.1, side: "left" },
            { time:381.9, side: "right" },
            { time:386.8, side: "right" },
            { time:396.4, side: "left" }
        ],
    };


    let currentSchedule = [];

    const messages = [
        "髪綺麗だな〜声かけてこないかな〜",
        "めっちゃタイプ！声かけてきてほしい",
        "めっちゃオシャレだな〜、気になる",
        "あの人なんか雰囲気いいな〜声かけてこないかな〜",
        "あの服の感じ、めっちゃ好きだな、話せたら楽しそう",
        "あの人かっこいいな、声かけられたら普通に嬉しい",
        "すごいかっこいいな、声かけられたら緊張しそう",
        "あの人絶対モテるだろうな",
        "落ち着いてる感じめっちゃタイプだ",
        "あの人絶対いい匂いする、近づきたい",
        "着こなし綺麗だな〜今日は得した気分"
      ];

    // ページ読み込み時にplayerの値を復元
    function loadPlayer() {
        const saved = localStorage.getItem("player");
        if (saved) {
            return JSON.parse(saved);
        } else {
            // 初期値
            return {
                level: 1,
                coord: 69,
                voice: 55,
                posture: 58,
                approach: 38,
                talk: 29,
                approachAttempts: 0,
                approachSuccess: 0,
                ignored: 0,
                lowReact: 0,
                highReact: 0,
                pulled: 0,
                closed: 0,
                talkProgress: 0
            };
        }
    }


    // playerオブジェクト
    const player = loadPlayer();

    // 変更があったらlocalStorageに保存する関数
    function savePlayer() {
        localStorage.setItem("player", JSON.stringify(player));
    }

    const oneplayer = {
        level: 1,
        coord: 74,
        voice: 67,
        posture: 70,
        approach: 85,
        talk: 20,
        approachAttempts: 0,
        approachSuccess: 0,
        ignored: 0,
        lowReact: 0,
        highReact: 0,
        pulled: 0,
        closed: 0,
        talkProgress: 0
    };

    const video = document.getElementById("game-video");
    const logStatusEl = document.getElementById("log-status");
    const logMessagesEl = document.getElementById("log-messages");
    const statusEl = document.getElementById("status");
    const statusEll = document.getElementById("status2");

    const buttons = {
        left: document.getElementById("btn-left"),
        right: document.getElementById("btn-right"),
    };

    const buttonIds = ["left", "right"];
    const tapCounts = { left: 0, right: 0 };

    let activeButton = null;
    let cooldown = false;
    let intervalId = null;

    const statLabels = {
        coord: "コーデ",
        voice: "発声",
        posture: "姿勢",
        approach: "声かけ",
        talk: "トーク"
    };

    function getRank(value) {
        if (value >= 80) return "A";
        if (value >= 70) return "B";
        if (value >= 60) return "C";
        if (value >= 50) return "D";
        if (value >= 40) return "E";
        if (value >= 30) return "F";
        return "G";
    }

    function getRankColor(rank) {
        switch (rank) {
            case "A": return "deepskyblue";
            case "B": return "red";
            case "C":
            case "D": return "gold";
            case "E": return "yellowgreen";
            case "F": return "purple";
            case "G": return "indigo";
            default: return "gray";
        }
    }

    function log(text) {
        const div = document.createElement("div");
        div.textContent = text;
        logMessagesEl.appendChild(div);
        logMessagesEl.scrollTop = logMessagesEl.scrollHeight;
    }

    function updateLogStatus() {
        logStatusEl.textContent =
            `地蔵:${oneplayer.approachAttempts - oneplayer.approachSuccess} 声かけ:${oneplayer.approachSuccess} 無視:${oneplayer.ignored} ` +
            `低反応:${oneplayer.lowReact} 高反応:${oneplayer.highReact} 連れ出し:${oneplayer.pulled} クロージング:${oneplayer.closed}`;
    }

    function updateStatus() {
        statusEl.innerHTML = "";
        statusEll.innerHTML = "";
        const keys = ["coord", "voice", "posture"];
        const keyss = ["approach", "talk"];
        keys.forEach((key, i) => {
            const span = document.createElement("span");
            span.className = "label";
            const rank = getRank(player[key]);
            span.textContent = `${statLabels[key]}:${player[key]}(${rank})`;
            span.style.backgroundColor = getRankColor(rank);
            statusEl.appendChild(span);
        });
        keyss.forEach((key, i) => {
            const span = document.createElement("span");
            span.className = "label";
            const rank = getRank(player[key]);
            span.textContent = `${statLabels[key]}:${player[key]}(${rank})`;
            span.style.backgroundColor = getRankColor(rank);
            statusEll.appendChild(span);
        });
    }

    function updateStartStatus() {
        const el = document.getElementById("start-status");
        el.innerHTML = `【デュオの能力値】<br/>レベル:${player.level}<br/>`;
        for (const key of ["coord", "voice", "posture", "approach", "talk"]) {
            const rank = getRank(player[key]);
            const color = getRankColor(rank);
            el.innerHTML += `<span style="color:${color}; font-weight:bold;">${statLabels[key]}:${player[key]}(${rank})</span><br/>`;
        }
        aku = player.approachSuccess - player.ignored
        el.innerHTML += "<br/>【累計】<br/>" +
            `地蔵:${player.approachAttempts - player.approachSuccess} 声かけ:${player.approachSuccess}<br/>` +
            `無視:${player.ignored} 低反応:${player.lowReact} 高反応:${player.highReact}<br/>` +
            `連れ出し:${player.pulled} クロージング:${player.closed}<br/>声かけ率:${player.approachSuccess / player.approachAttempts * 100}%<br/>反応率:${aku / player.approachSuccess * 100}%<br/>連れ出し率:${player.pulled / player.approachSuccess * 100}%<br/>クロージング率:${player.closed / player.approachSuccess * 100}%`;
    }
    updateStartStatus();

    function isVideoPlaying(video) {
        return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
    }

    function clearActiveButton() {
        if (activeButton) {
            buttons[activeButton].classList.remove("highlight");
            tapCounts[activeButton] = 0;
            activeButton = null;
        }
    }

    function highlightButtonRandom() {
        if (!isVideoPlaying(video)) {
            clearActiveButton();
            disableAllButtons();
            return;
        }

        clearActiveButton();
        const rand = buttonIds[Math.floor(Math.random() * buttonIds.length)];
        activeButton = rand;
        buttons[rand].classList.add("highlight");
        enableButton(rand);

        setTimeout(() => {
            if (activeButton === rand) {
                clearActiveButton();
                disableAllButtons();
            }
        }, 5000);
    }

    function enableButton(id) {
        buttons[id].disabled = false;
    }
    function disableButton(id) {
        buttons[id].disabled = true;
    }
    function disableAllButtons() {
        buttonIds.forEach(id => disableButton(id));
    }

    function shuffleArray(array) {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function attemptApproach() {
        console.log("attemptApproachが呼ばれました activeButton:", activeButton);
        if (cooldown) {
            console.log("クールダウン中なので処理をスキップ");
            return;
        }
        cooldown = true;
        player.approachAttempts++;
        savePlayer();
        oneplayer.approachAttempts++;
        const chance = Math.random() * 100;
        if (!player.nextLevelThreshold) {
            player.nextLevelThreshold = 2; // レベル2に必要な成功数
        }
        if (chance < player.approach) {
            player.approachSuccess++;
            savePlayer();
            oneplayer.approachSuccess++;
            if (player.approachSuccess >= player.nextLevelThreshold) {
                player.level++;
                player.approach++; // 声かけ能力 +1
                // 成長させる能力値を選ぶ（最大2つ）
                const upgradableStats = ["talk", "voice", "coord", "posture"].filter(stat => player[stat] <= 88);
                const upgradedStats = shuffleArray(upgradableStats).slice(0, 2);
                for (const stat of upgradedStats) {
                    player[stat]++;
                }
                // ログメッセージを1回にまとめる
                const upgrades = [`声かけ+1`, ...upgradedStats.map(stat => `${statLabels[stat]}+1`)];
                log(`🎉レベルアップ！Lv${player.level}になった！${upgrades.join("、")}`);
                // 次のレベルのしきい値を更新
                player.nextLevelThreshold = player.nextLevelThreshold + player.level * 2;
            }
            savePlayer();
            updateStatus();
            react();
        } else {
            log("地蔵");
        }
        updateLogStatus();
        updateStatus();
        setTimeout(() => cooldown = false, 2000);
    }

    function react() {
        const avg = (player.coord + player.voice + player.posture) / 3;
        const ignoreChance = Math.random() * 100;

        if (ignoreChance < (100 - avg)) {
            player.ignored++;
            savePlayer();
            oneplayer.ignored++;
            log("声かけ → 無視された");
        } else {
            const isHigh = Math.random() < 0.5;
            if (isHigh) {
                player.highReact++;
                savePlayer();
                oneplayer.highReact++;
                hannou = "高反応！";
            } else {
                player.lowReact++;
                savePlayer();
                oneplayer.lowReact++;
                hannou = "低反応";
            }

            // 連れ出し判定
            if (Math.random() * 100 < player.talk) {
                player.pulled++;
                savePlayer();
                oneplayer.pulled++;
                // クロージング判定
                if (Math.random() * 100 < (player.talk + player.posture) / 2) {
                    player.closed++;
                    savePlayer();
                    oneplayer.closed++;
                    log(`声かけ → ${hannou} → 連れ出し → クロージング成功！！`);
                } else {
                    log(`声かけ → ${hannou} → 連れ出し → クロージング失敗`);
                }
            } else {
                log(`声かけ → ${hannou} → 連れ出し失敗`);
            }
        }
    }

    function setupButtons() {
        buttonIds.forEach(id => {
            buttons[id].onclick = () => {
                if (activeButton !== id) return;
                tapCounts[id]++;
                if (tapCounts[id] >= 1) {
                    attemptApproach();
                    tapCounts[id] = 0;
                }
            };
        });
    }

    function startHighlightLoop() {
        if (intervalId) return;
        intervalId = setInterval(highlightButtonRandom, 6000);
    }
    function stopHighlightLoop() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        clearActiveButton();
        disableAllButtons();
    }

    const startScreen = document.getElementById("start-screen");
    const startBtn = document.getElementById("start-btn");
    const gameScreen = document.getElementById("game");

    function init() {
        startScreen.style.display = "flex";
        gameScreen.style.display = "none";

        startBtn.addEventListener("click", () => {
            const selected = document.getElementById("video-select").value;
            currentSchedule = schedules[selected] || [];
            video.addEventListener("play", () => {
                startScheduledHighlights(currentSchedule);
            });

            video.src = selected;
            startScreen.style.display = "none";
            gameScreen.style.display = "flex";

            disableAllButtons();

            video.play();

            video.addEventListener("click", () => {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });

            video.addEventListener("pause", () => {
                stopHighlightLoop();
            });

            video.addEventListener("ended", () => {
                log("🎉 動画終了！おつかれさまでした！");
                log("↓ スタート画面に戻るには下のボタンを押してください");

                const backBtn = document.createElement("button");
                backBtn.textContent = "スタート画面に戻る";
                backBtn.style.fontSize = "18px";
                backBtn.style.margin = "10px";
                backBtn.onclick = () => {
                    location.reload(); // 状態リセットして最初から
                };
                logMessagesEl.appendChild(backBtn);

                stopHighlightLoop();
                disableAllButtons();
            });


            updateLogStatus();
            updateStatus();
            setupButtons();
        });
    }

    init();

    function disableDoubleTapZoom() {
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function (event) {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });
    }

    function startScheduledHighlights(schedule) {
        const scheduleWithState = schedule.map(item => ({ ...item, shown: false }));
        const interval = setInterval(() => {
            if (video.paused || video.ended) return;
            const current = video.currentTime;
            for (const item of scheduleWithState) {
                if (!item.shown && current >= item.time) {
                    item.shown = true;
                    activeButton = item.side;
                    buttons[item.side].classList.add("highlight");
                    enableButton(item.side);
                    showRandomMessage();

                    setTimeout(() => {
                        if (activeButton === item.side) {
                            clearActiveButton();
                            disableAllButtons();
                        }
                    }, 2000);
                }
            }

            if (scheduleWithState.every(item => item.shown)) {
                clearInterval(interval);
            }
        }, 200);
    }

    function showRandomMessage() {
        const messageArea = document.getElementById("message-area");
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageArea.textContent = messages[randomIndex];
      }

    function setupButtons() {
        buttonIds.forEach(id => {
            buttons[id].onclick = () => {
                console.log(`Clicked button: ${id}, activeButton: ${activeButton}`);  // 追加：クリックが検知されているか
                if (activeButton !== id) {
                    console.log("クリック無効（ハイライトと違うボタン）");
                    return;
                }
                tapCounts[id]++;
                if (tapCounts[id] >= 1) {
                    attemptApproach();
                    tapCounts[id] = 0;
                }
            };
        });
    }

})();
