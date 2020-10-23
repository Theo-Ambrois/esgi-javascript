function type_check_v1(val, type) {
	switch (typeof val) {
		case "object":
			if (type === "array") return Array.isArray(val);
			if (type === "null") return val === null;
		return val != null && !Array.isArray(val);
		case 'undefined':
			return myNumber === undefined;
		case 'null':
			return myNumber === null;
		default:
			return typeof val === type;
}
}

function type_check_v2(arg, conf) {
	for (toCheck in conf) {
	switch (toCheck) {
		case 'type':
			if (!type_check_v1(arg, conf.type)) return false;
			break;
		case 'value':
			if (JSON.stringify(arg) !== JSON.stringify(conf.value)) return false;
			break;
		case 'enum':
			let isFound = false;
			for(value of conf.enum){
			isFound = type_check_v2(arg, {value: value})
		if (isFound) 
			break;
		}
	if (!isFound) return false
		break;
	}
}

eturn true;
}

function type_check(arg, types) {
let isChecked = type_check_v2(arg, types);

if(!types.properties) return isChecked

for (const typeKey in types.properties) {
isChecked = type_check(
type_check_v1(arg, 'object') ? arg[typeKey] : arg
, types.properties[typeKey]
)
if (!isChecked) break
}

return isChecked
}
