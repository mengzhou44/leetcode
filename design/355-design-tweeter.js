class Twitter {
	constructor() {
		this.map = new Map()
		this.tweets = []
	}

	postTweet(id, tweetId) {
		if (!this.map.has(id)) {
			this.map.set(id, [])
		}
		this.tweets.push({ id, tweetId })
	}

	getNewsFeed(id) {
		if (!this.map.has(id)) return []
		let ids = [id, ...this.map.get(id)]
		let count = 0
		let res = []
		for (let i = this.tweets.length - 1; i >= 0; i--) {
			if (ids.includes(this.tweets[i].id)) {
				res.push(this.tweets[i].tweetId)
				count++
				if (count === 10) return res
			}
		}

		return res
	}

	follow(followerId, followeeId) {
		if (!this.map.has(followerId)) {
			this.map.set(followerId, [])
		}

		this.map.get(followerId).push(followeeId)
	}

	unfollow(followerId, followeeId) {
		if (this.map.has(followerId)) {
			let list = this.map.get(followerId).filter((item) => item !== followeeId)
			this.map.set(followerId, list)
		}
	}
}
class Twitter {
	constructor() {
		this.map = new Map()
		this.tweets = []
	}

	postTweet(id, tweetId) {
		if (!this.map.has(id)) {
			this.map.set(id, [])
		}
		this.tweets.push({ id, tweetId })
	}

	getNewsFeed(id) {
		if (!this.map.has(id)) return []
		let ids = [id, ...this.map.get(id)]
		let count = 0
		let res = []
		for (let i = this.tweets.length - 1; i >= 0; i--) {
			if (ids.includes(this.tweets[i].id)) {
				res.push(this.tweets[i].tweetId)
				count++
				if (count === 10) return res
			}
		}

		return res
	}

	follow(followerId, followeeId) {
		if (!this.map.has(followerId)) {
			this.map.set(followerId, [])
		}

		this.map.get(followerId).push(followeeId)
	}

	unfollow(followerId, followeeId) {
		if (this.map.has(followerId)) {
			let list = this.map.get(followerId).filter((item) => item !== followeeId)
			this.map.set(followerId, list)
		}
	}
}
