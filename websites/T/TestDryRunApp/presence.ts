const presence = new Presence({ clientId: '000000000000000000' })

const ActivityAssets = {
  Logo: 'https://cdn.rcd.gg/PreMiD/websites/Y/YouTube/assets/0.png',
  Watching: 'https://cdn.rcd.gg/PreMiD/websites/A/Anirose/assets/logo.png',
} as const

presence.on('UpdateData', async () => {
  presence.setActivity({ largeImageKey: ActivityAssets.Logo })
})
