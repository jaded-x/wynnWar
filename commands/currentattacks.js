module.exports = {
	name: 'currentattacks',
	description: 'Territories currently being attack will be shown in this channel.',
	async execute(interaction) {

		await interaction.reply('Set channel `#' + interaction.client.channels.cache.get(interaction.channelId).name + '` to show current attacks on territories.');
	},
};