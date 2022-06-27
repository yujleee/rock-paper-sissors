export function checkBrowser() {
  const agent = navigator.userAgent.toLowerCase();
  if (agent.indexOf('chrome') != -1) return 'Chrome';
  if (agent.indexOf('opera') != -1) return 'Opera';
  if (agent.indexOf('firefox') != -1) return 'Firefox';
  if (agent.indexOf('safari') != -1) return 'Safari';
  if (agent.indexOf('mozilla/5.0') != -1) return 'Mozilla';
}
