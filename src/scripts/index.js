import cConf from './config/configConfig';
import conf from './config/config';

class Application {
	constructor () {
		this.isEnabled = true;
		this.conf = null;
		this.setupConf();
	}

	setupConf(c) {
		if (!cConf.confConf(c)) {
			this.conf = conf;
		} else {
			this.conf = c;
		}
	}

	message(m){
		const msg = (index) => {
			switch (index) {
				case 1:
					return this.conf.h;
					break;
				case 2:
					return this.conf.w;
					break;
				case 3:
					return this.conf.e;
					break;
				default:
					return '';
					break;
			}
		};

		var msg1 = msg(1);
		var msg2 = msg(2);
		var msg3 = msg(3);

		return `${msg1} ${msg2}${msg3}`;
	};
}

const application = new Application();

console.log(application.message());