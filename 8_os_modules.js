// syntax to import built-in modules
// os module: Operating System module
const os = require(`os`);

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`Th System Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
// much more operation can be used from built-in modules -> keep learning
