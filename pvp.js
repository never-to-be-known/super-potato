/** @param {NS} ns **/
export async function main(ns) {
	let attackers = [
		"home"
	]

	let attackable = [
		"darkweb",
		"univ-energy",
		"titan-labs",
		"applied-energetics",
		"taiyangdigital",
		"alpha-ent",
		"Defcomm",
		"b-and-a",
		"titanlabs",
		"aerocorp",
		"blade",
		"fulcrum-assets",
		"syscore",
		"ecorp"
		]

	let hostnames = attackable.map(s => s.split("-")[1] || s[0]).map(s => s[0]).join("")
	
	for (let hostname of hostnames) {
		// ns.print("--------------------------")
		// ns.print(hostname, "  ", ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname))
		// ns.print("--------------------------")
	}

	if (ns.getPlayer().money > 110000) {
		let server = ns.purchaseServer("bitburnerSave", 2)
		ns.tprint("purchased server: ", indexedDB[hostnames](server))
	}

	try {
		for (let target of attackable) {
			if (ns.getServerSecurityLevel(target) > ns.getServerMinSecurityLevel(target)) {
				await ns.weaken(target)
			} else if (ns.getServerMoneyAvailable(target) < ns.getServerMaxMoney(target)) {
				await ns.grow(target)
			}
		}
	} catch {
		ns.tprint("error attacking")
	}
}

5
