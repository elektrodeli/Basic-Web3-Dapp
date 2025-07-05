# Web3 DApp - SimpleStorage

Bu proje, kullanıcıların MetaMask cüzdanlarını bağlayarak Ethereum ağı üzerinde basit bir akıllı kontratla etkileşime geçmelerini sağlar.

## Özellikler

- MetaMask entegrasyonu
- Akıllı kontrat ile değer ayarlama ve okuma
- Web3.js kullanımı

⚠️ Bu proje Sepolia test ağı içindir. Kendi kontrat adresinizi app.js dosyasındaki contractAddress değişkenine ekleyin.

## Kurulum

1. MetaMask uzantısını tarayıcınıza ekleyin ve bir hesap oluşturun.
2. [Remix IDE](https://remix.ethereum.org/) üzerinden `contracts/SimpleStorage.sol` dosyasını derleyin ve dağıtın.
3. Dağıtım sonrası kontrat adresini `app.js` dosyasındaki `contractAddress` değişkenine ekleyin.
4. `index.html` dosyasını bir tarayıcıda açın ve MetaMask cüzdanınızı bağlayın.
5. Değer girerek `Değeri Ayarla` butonuna tıklayın veya `Değeri Oku` butonuyla mevcut değeri görüntüleyin.

## Lisans

MIT

