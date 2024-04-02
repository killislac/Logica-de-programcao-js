function jogoFutebol(time1, time2){

    if (time1 >time2){
        mensagem = 'Vitória do primeiro time';

    }else if(time2 > time1){
        mensagem = 'Vitória do segundo time';
    }else {
        mensagem = 'Empate';
    }

    return mensagem;
}