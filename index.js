function snakecase(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        const current_char = input[i];
        if (current_char === current_char.toUpperCase() && current_char !== current_char.toLowerCase() && i !== 0) {
            output += '_' + current_char.toLowerCase();
        } else {
            output += current_char.toLowerCase(); //First key
        }
    }
    return output;
}
function convert_object(input_object){
    const output_object = {};
    for(const key in input_object){
        const snake_case_key = snakecase(key);
        if(typeof input_object[key] == "object"){
            if(Array.isArray(input_object[key])){
                const array_output = convert_array(input_object[key])
                Object.assign(output_object,{ [snake_case_key]: array_output} )
                continue;
            }else{
                const obj_output = convert_object(input_object[key]);
                Object.assign(output_object, { [snake_case_key]: obj_output})
                continue;
            }
        }
        Object.assign(output_object, { [snake_case_key]: input_object[key] })
    }
    return output_object;
}

function convert_array(inputArr){
    return inputArr.map(v=>{
        if(typeof v == "object"){
            if(Array.isArray(v)){
                return convert_array(v)
            }
            return convert_object(v)
        }
        return v;
    })
}

function main(request){
    if(typeof request == "object"){
        if(Array.isArray(request)){
            return convert_array(request);
        }
        return convert_object(request);
    }
    return request;
}

export const convert = main;
