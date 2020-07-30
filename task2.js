let str = 'This website is for losers LoL!'
function format (params) {
    let str2 = params.split('');
    let cons = '';
        for (let i = 0; i < str2.length; i++) {
            if (str2[i] != 'i' && str2[i] != 'o' && str2[i] != 'e' && str2[i] != 'a' && str2[i] != 'y')  {
                cons += str2[i];
            }
        };
        return cons;
    };
        format(str);
        console.log(format(str));