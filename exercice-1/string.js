function ucfirst(message){
	if(typeof message !== "string" || message !== "")
		return "";
	return message.charAt(0).toUpperCase() + message.slice(1);
}

function capitalize(string) {
    if (typeof string !== "string" && string !== "")
    	return "";	

    return string.split(" ").map((string) => {
    	return ucfirst(string)
    }
    ).join(" ");
}

function camelCase(string) {
    if (typeof string !== "string" && string !== "")
    	return "";

    return capitalize(string).split(" ").join("");
}

function snake_case(string) {
    if (typeof string !== "string" && string !== "")
    	return "";

    string = string = string.toLowerCase();
    return string.replace(" ", "-");

}