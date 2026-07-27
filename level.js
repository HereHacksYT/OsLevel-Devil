// OsLevel Devil - Harita Veritabanı
const LEVELS = [
  // HARİTA 1: Giriş ve Sahte Zemin / Sahte Kapı Trollü
  {
    playerStart: { x: 50, y: 300 },
    door: { x: 700, y: 280 },
    platforms: [
      { x: 0, y: 350, width: 250, height: 50 },
      // Oyuncu üzerine gelince DÜŞEN platform (fallOnTouch)
      { x: 250, y: 350, width: 150, height: 50, fallOnTouch: true, falling: false },
      // Oyuncu yaklaşınca KAYBOLAN platform (disappearOnApproach)
      { x: 400, y: 350, width: 150, height: 50, disappearOnApproach: true, visible: true },
      { x: 600, y: 350, width: 200, height: 50 }
    ],
    spikes: [
      { x: 150, y: 330, width: 30, height: 20 }
    ],
    // Sahte Kapı Trollü: Kapıya yaklaşınca kapı ileri kaçar!
    trolls: {
      trollDoor: true,
      trollDoorTriggerX: 620,
      trollDoorTargetX: 720
    }
  },

  // HARİTA 2: Kontrol Tersine Dönme + Hareketli Dikenler + Yer Çekimi
  {
    playerStart: { x: 50, y: 300 },
    door: { x: 700, y: 100 },
    reverseControls: true, // BU SEVİYEDE SAĞ-SOL TERS!
    platforms: [
      { x: 0, y: 350, width: 200, height: 50 },
      { x: 250, y: 250, width: 150, height: 20 },
      { x: 450, y: 180, width: 150, height: 20 },
      { x: 650, y: 150, width: 150, height: 20 }
    ],
    spikes: [
      // Hareket eden tuzak diken
      { x: 300, y: 230, width: 30, height: 20, moving: true, speed: 2, range: 80, startX: 300 }
    ],
    buttons: [
      // Butona basınca görünür olan gizli köprü
      { x: 150, y: 330, width: 20, height: 20, targetPlatformIndex: 1 }
    ]
  }
];
