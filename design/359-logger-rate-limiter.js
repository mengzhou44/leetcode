class Logger {
    
    constructor() {
        this.map = map()
        
	}

	shouldPrintMessage(stamp, message) {
		if (!this.map.has(message)) {
			this.map.set(message, stamp)
		}
		let temp = this.map.get(message)
		if (stamp - temp <= 10) {
			return true
		}
		return false
	}
}
