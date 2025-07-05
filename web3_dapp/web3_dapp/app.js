let web3;
let contract;
let account;

const contractABI = [
  {
    "inputs": [{"internalType": "uint256", "name": "x", "type": "uint256"}],
    "name": "set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
];

// Kontrat adresini kendi dağıtımınızdan sonra buraya ekleyin
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";

window.addEventListener('load', async () => {
  if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      account = accounts[0];
      document.getElementById('account').innerText = `Bağlı Hesap: ${account}`;
      contract = new web3.eth.Contract(contractABI, contractAddress);
    } catch (error) {
      console.error("Kullanıcı MetaMask bağlantısını reddetti.");
    }
  } else {
    alert("Lütfen MetaMask uzantısını yükleyin!");
  }
});

document.getElementById('setButton').addEventListener('click', async () => {
  const value = document.getElementById('inputValue').value;
  if (contract && account) {
    try {
      await contract.methods.set(value).send({ from: account });
      document.getElementById('status').innerText = "Değer başarıyla ayarlandı.";
    } catch (error) {
      console.error(error);
      document.getElementById('status').innerText = "İşlem başarısız oldu.";
    }
  }
});

document.getElementById('getButton').addEventListener('click', async () => {
  if (contract) {
    try {
      const value = await contract.methods.get().call();
      document.getElementById('status').innerText = `Saklanan Değer: ${value}`;
    } catch (error) {
      console.error(error);
      document.getElementById('status').innerText = "Değer okunamadı.";
    }
  }
});
