class confConf {
	
	constructor (p={}) {
		this.p = p;
		this.tempP = [];
	}

	confConf () {
		if (this.p.h) {
			this.tempP.push(p.h);
		}
		if (this.p.w) {
			this.tempP.push(p.w);
		}
		if (this.p.e) {
			this.tempP.push(p.e);
		}

		return this.tempP.length === 3;
	}
}

const cConf = new confConf();

export default cConf;