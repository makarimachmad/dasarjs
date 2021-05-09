let visitsCountMap = new Map(); // Menyimpan daftar user
 
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}
 
let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"
 
jonas = null;                    // Data object "Jonas" dihapus
 
console.log(visitsCountMap);