const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: {
		login: './src/Login.js',
		adminHeader: './src/Admin/Header.js',
		adminNavigation: './src/Admin/Navigation.js',
		dashboard: './src/Admin/Dashboard.js',
		adminJournalMasthead: './src/Admin/Journal/Masthead.js',
		adminJournalContact: './src/Admin/Journal/Contact.js',
		adminJournalApperance: './src/Admin/Journal/Apperance.js',
		adminJournalSubmission: './src/Admin/Journal/Submission.js',
		adminJournalIndexing: './src/Admin/Journal/Indexing.js',
		adminJournalUsers: './src/Admin/Journal/Users.js',
		adminUsersAccount: './src/Admin/Users/Account/Lists.js',
		adminUsersAccountForms: './src/Admin/Users/Account/Forms.js',
		adminUsersProfile: './src/Admin/Users/Profile/Forms.js',
		adminUsersRoleLists: './src/Admin/Users/UserRoles/Lists.js',
		adminSubmissionLists: './src/Admin/Submission/Lists.js',
		adminSubmissionWizardStart: './src/Admin/Submission/Wizard/Start.js',
		adminSubmissionWizardUpload: './src/Admin/Submission/Wizard/Upload.js',

		welcomeHeader: './src/Welcome/Header.js',
		welcomeHome: './src/Welcome/Home.js',
		welcomeAboutJournal: './src/Welcome/About/Journal.js',
		welcomeAboutEditorialTeam: './src/Welcome/About/EditorialTeam.js',
		welcomeAboutPrivacy: './src/Welcome/About/Privacy.js',
		welcomeAboutSubmissions: './src/Welcome/About/Submissions.js',
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'public/assets/admin/bundle')
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			}
		]
	},

	optimization: {
		splitChunks: {
			chunks: 'all',
			automaticNameDelimiter: '.',
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor'
				}
			}
		},
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					output: {
						comments: false
					}
				}
			})
		]
	},

	devServer: {
		open: true,
		disableHostCheck: true
	}
};
