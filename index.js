
const Get_HostAndUserInfo = require('./rest/api/Get_HostAndUserInfo.json');
const Get_HDDPower = require('./rest/api/Get_HDDPower.json');
const Get_StorageHealth = require('./rest/api/Get_StorageHealth.json');
const Get_BrcmStorCtrlAttr = require('./rest/api/Get_BrcmStorCtrlAttr.json');
const Get_PCIESSDInfo = require('./rest/api/Get_PCIESSDInfo.json');
const Get_MrvlInfo = require('./rest/api/Get_MrvlInfo.json');
const Get_BrcmStorCtrlInfo = require('./rest/api/Get_BrcmStorCtrlInfo.json');
const Get_BrcmStorCtrlPhyDrvInfo = require('./rest/api/Get_BrcmStorCtrlPhyDrvInfo.json');
const Get_BrcmStorCtrlLogDrvInfo = require('./rest/api/Get_BrcmStorCtrlLogDrvInfo.json');
const Get_PlatformInfo = require('./rest/api/Get_PlatformInfo.json');
const GENERIC_INFO = require('./rest/api/GENERIC_INFO.json');
const GET_IKVM_STATUS = require('./rest/api/GET_IKVM_STATUS.json');
const upgrade_process = require('./rest/api/upgrade_process.json');
const IKVM_PREVIEW = require('./rest/api/IKVM_PREVIEW.json');
const special_login_check = require('./rest/api/special_login_check.json');
const GetScreenCapture = require('./rest/api/GetScreenCapture.json');
const SaveBootCapture = require('./rest/api/SaveBootCapture.json');
const CONFIG_INFO = require('./rest/api/CONFIG_INFO.json');
const DDNS_INFO = require('./rest/api/DDNS_INFO.json');
const TROUBLE_SHOOTING = require('./rest/api/TROUBLE_SHOOTING.json');
const Get_PlatformCap = require('./rest/api/Get_PlatformCap.json');
const Get_PSInfoReadings = require('./rest/api/Get_PSInfoReadings.json');
const Get_NodeInfoReadings = require('./rest/api/Get_NodeInfoReadings.json');
const FRU_INFO = require('./rest/api/FRU_INFO.json');
const POWER_CONSUMPTION = require('./rest/api/POWER_CONSUMPTION.json');
const GET_BIOS_UPD_CONF = require('./rest/api/GET_BIOS_UPD_CONF.json');
const Processors = require('./rest/api/Processors.json');
const PCIeDevices = require('./rest/api/PCIeDevices.json');
const Inventory = require('./rest/api/Inventory.json');
const SysLockdown = require('./rest/api/SysLockdown.json');
const VirtualMedia = require('./rest/api/VirtualMedia.json');
const Tasks = require('./rest/api/Tasks.json');
const NetworkAdapters = require('./rest/api/NetworkAdapters.json');
const MouseMode = require('./rest/api/MouseMode.json');
const NetworkProtocol = require('./rest/api/NetworkProtocol.json');
const SSLCert = require('./rest/api/SSLCert.json');
const MultiNode = require('./rest/api/MultiNode.json');
const NodeA = require('./rest/api/NodeA.json');
const NodeB = require('./rest/api/NodeB.json');
const NodeC = require('./rest/api/NodeC.json');
const UBB_1 = require('./rest/api/UBB_1.json');
const TroubleShootingDump = require('./rest/api/TroubleShootingDump.json');

module.exports = () => ({
  Get_HostAndUserInfo: Get_HostAndUserInfo,
  Get_HDDPower: Get_HDDPower,
  Get_StorageHealth: Get_StorageHealth,
  Get_BrcmStorCtrlAttr: Get_BrcmStorCtrlAttr,
  Get_PCIESSDInfo: Get_PCIESSDInfo,
  Get_MrvlInfo: Get_MrvlInfo,
  Get_BrcmStorCtrlInfo: Get_BrcmStorCtrlInfo,
  Get_BrcmStorCtrlPhyDrvInfo: Get_BrcmStorCtrlPhyDrvInfo,
  Get_BrcmStorCtrlLogDrvInfo: Get_BrcmStorCtrlLogDrvInfo,
  Get_PlatformInfo: Get_PlatformInfo,
  GENERIC_INFO: GENERIC_INFO,
  GET_IKVM_STATUS: GET_IKVM_STATUS,
  upgrade_process: upgrade_process,
  IKVM_PREVIEW: IKVM_PREVIEW,
  special_login_check: special_login_check,
  GetScreenCapture: GetScreenCapture,
  SaveBootCapture: SaveBootCapture,
  CONFIG_INFO: CONFIG_INFO,
  DDNS_INFO: DDNS_INFO,
  TROUBLE_SHOOTING: TROUBLE_SHOOTING,
  Get_PlatformCap: Get_PlatformCap,
  Get_PSInfoReadings: Get_PSInfoReadings,
  Get_NodeInfoReadings: Get_NodeInfoReadings,
  FRU_INFO: FRU_INFO,
  POWER_CONSUMPTION: POWER_CONSUMPTION,
  GET_BIOS_UPD_CONF: GET_BIOS_UPD_CONF,
  Processors: Processors,
  PCIeDevices: PCIeDevices,
  Inventory: Inventory,
  SysLockdown: SysLockdown,
  VirtualMedia: VirtualMedia,
  Tasks: Tasks,
  NetworkAdapters: NetworkAdapters,
  MouseMode: MouseMode,
  NetworkProtocol: NetworkProtocol,
  SSLCert: SSLCert,
  MultiNode: MultiNode,
  NodeA: NodeA,
  NodeB: NodeB,
  NodeC: NodeC,
  UBB_1: UBB_1,
  TroubleShootingDump: TroubleShootingDump
});