const Authority = require('./models/Authority');
const Credential = require('./models/Credential');

module.exports = class Strategy {
	constructor(conn, authority) {
		this.conn = conn;
		this.authority = authority;
	}



	// Authenticate
	// ------------
	// The authenticate method is passed a Koa context, and is responsible for interfacing directly with the user. When a user has
	// successfully authenticated, it must return the corresponding User object, which the service will use to generate a token.
	//
	// If appropriate, the strategy may also attempt to resolve an unknown user based on other credentials (such as email), and even
	// create a new User if necessary. If a strategy does this, its mapping to other strategies/credentials must be configurable, as
	// to avoid tightly coupling them.

	async authenticate() {
		throw new Error('The authenticate method must be implemented in each strategy.');
	}



	// Authority Methods
	// -----------------

	static async createAuthority(conn, data) {
		return Authority.create(conn, data);
	}



	static async updateAuthority(authority, delta) {
		return authority.update(delta);
	}



	static async deleteAuthority(authority) {
		return authority.delete();
	}



	// Credential Methods
	// ------------------

	async createCredential(data) {
		return Credential.create(this.conn, data);
	}



	async updateCredential(credential, delta) {
		return credential.update(delta);
	}



	async deleteCredential(credential) {
		return credential.delete();
	}

};
