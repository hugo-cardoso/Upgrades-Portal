    function alteracoes(){

    var pergunta1 = "Este aparelho será atualizado?"
    var resposta1_S = "Sim, em breve o aparelho será atualizado. Lembrando que, aparelhos com vinculo a operadoras demoram um pouco mais para receber a atualização, pois existe um processo de análise do sistema pela operadora."
    var resposta1_N = "Este aparelho não será atualizado."
    var pergunta2 = "Porque o Moto X Style e o Moto X 2ª Geração já receberam?"
    var resposta2 = "A Motorola procura oferecer em seus produtos a experiência do Android puro, complementado com inovações, cujo objetivo é resolver problemas reais dos consumidores e melhorar a interação destes com seus smartphones. <br><br> Quando uma nova versão do Android é disponibilizada, levamos em consideração alguns fatores para selecionar quais modelos serão os primeiros a receber o upgrade. Para isso, avaliamos aspectos como tempo de vida do produto, última versão liberada, estágio do desenvolvimento do produto, similaridade com outros modelos, nível de alteração necessária para atualizar as experiências Moto, capacidade do hardware de suportar a nova versão com eficiência e desempenho, disponibilidade de códigos/firmware atualizados e estáveis por parte dos fornecedores de componentes como processador, modem e outros. <br><br> Pelos fatores descritos acima, o Moto X (2a. Geração) e o Moto X Style foram os primeiros produtos a atingir o nível de qualidade necessário e a ter o upgrade disponibilizado. Após o início da entrega para um número limitado de usuários da versão do software de varejo, ampliaremos gradualmente a quantidade de pessoas até atingir todos os usuários. Software dos produtos com versão de operadoras, em geral, têm uma etapa adicional que é o teste realizado pelas próprias operadoras e, por esta razão, podem levar mais algum tempo até que sejam liberados.";
    var pergunta3 = "O que é SOAK test?"
    var resposta3 = "Teste do sistema(Android) por um grupo seleto de usuários, onde a Motorola verificará se o sistema possui falhas e corrigirá antes do envio para todos os usuários."

    var e = document.getElementById("selec");
    var itemSelecionado = e.options[e.selectedIndex].value;

        if(itemSelecionado == "selected"){

        document.getElementById('duvida_tudo').style.display = 'none'; 

        document.getElementById('perg_1').innerHTML = "-";
        document.getElementById('resp_1').innerHTML = "-";

        document.getElementById('perg_2').innerHTML = "-";
        document.getElementById('resp_2').innerHTML = "-";

        document.getElementById('perg_3').innerHTML = "-";
        document.getElementById('resp_3').innerHTML = "-";

        document.getElementById('perg_4').innerHTML = "-";
        document.getElementById('resp_4').innerHTML = "-";

        document.getElementById('imagem').className = 'img-rounded';
        document.getElementById('imagem').src = "images/android_icon.png";
        document.getElementById('aparelhos').innerHTML = 
        ''
        document.getElementById('label').innerHTML = ""
        document.getElementById('label-lancamento').innerHTML = "Lançamento:"
        document.getElementById('retail').innerHTML ="-"
        document.getElementById('vivo').innerHTML ="-"
        document.getElementById('tim').innerHTML ="-"
        document.getElementById('claro').innerHTML ="-"
        document.getElementById('oi').innerHTML ="-"

        }

        if(itemSelecionado == "Moto E 1ª Geração"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_N;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motoe1.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1021</span> \n <span class="label label-primary">XT1022</span> \n <span class="label label-primary">XT1025</span> \n'
        document.getElementById('label').innerHTML = "Moto E 1ª Geração"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Fevereiro de 2014"
        document.getElementById('retail').innerHTML ="5.1 Lollipop"
        document.getElementById('vivo').innerHTML ="4.4.4 Kitkat"
        document.getElementById('tim').innerHTML ="4.4.4 Kitkat"
        document.getElementById('claro').innerHTML ="4.4.4 Kitkat"
        document.getElementById('oi').innerHTML ="4.4.4 Kitkat"

        }

        if(itemSelecionado == "Moto E 2ª Geração"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_S;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motoe2.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1506</span> \n <span class="label label-primary">XT1514</span> \n <span class="label label-primary">XT1523</span> \n'
        document.getElementById('label').innerHTML = "Moto E 2ª Geração"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Janeiro de 2015"
        document.getElementById('retail').innerHTML ="5.0.2 Lollipop"
        document.getElementById('vivo').innerHTML ="5.0.2 Lollipop"
        document.getElementById('tim').innerHTML ="5.0.2 Lollipop"
        document.getElementById('claro').innerHTML ="5.0.2 Lollipop"
        document.getElementById('oi').innerHTML ="5.0.2 Lollipop"

        }

        if(itemSelecionado == "Moto G 1ª Geração"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_N;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motog1.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1040</span>'
        document.getElementById('label').innerHTML = "Moto G 1ª Geração 4G"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Fevereiro de 2014"
        document.getElementById('retail').innerHTML ="5.1 Lollipop"
        document.getElementById('vivo').innerHTML ="4.4.4 Kitkat"
        document.getElementById('tim').innerHTML ="4.4.4 Kitkat(SOAK Test 5.1)"
        document.getElementById('claro').innerHTML ="4.4.4 Kitkat"
        document.getElementById('oi').innerHTML ="4.4.4 Kitkat"

        }

        if(itemSelecionado == "Moto G 1ª Geração LTE"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_N;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motog1.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1040</span>'
        document.getElementById('label').innerHTML = "Moto G 1ª Geração 4G"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Fevereiro de 2014"
        document.getElementById('retail').innerHTML ="5.1 Lollipop"
        document.getElementById('vivo').innerHTML ="4.4.4 Kitkat"
        document.getElementById('tim').innerHTML ="4.4.4 Kitkat(SOAK Test 5.1)"
        document.getElementById('claro').innerHTML ="4.4.4 Kitkat"
        document.getElementById('oi').innerHTML ="4.4.4 Kitkat"

        }

        if(itemSelecionado == "Moto G 2ª Geração"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_S;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/moto-g-2nd-gen-front.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1068</span> \n <span class="label label-primary">XT1069</span> \n <span class="label label-primary">XT1068</span>'
        document.getElementById('label').innerHTML = "Moto G 2ª Geração"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Março de 2014"
        document.getElementById('retail').innerHTML ="5.0.2 Lollipop"
        document.getElementById('vivo').innerHTML ="5.0.2 Lollipop"
        document.getElementById('tim').innerHTML ="Não lançou este modelo"
        document.getElementById('claro').innerHTML ="5.0.2 Lollipop"
        document.getElementById('oi').innerHTML ="5.0.2 Lollipop"

        }

        if(itemSelecionado == "Moto G 2ª Geração LTE"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_S;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motog2.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1078</span>'
        document.getElementById('label').innerHTML = "Moto G 2ª Geração 4G"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Janeiro de 2015"
        document.getElementById('retail').innerHTML ="5.0.2 Lollipop"
        document.getElementById('vivo').innerHTML ="5.0.2 Lollipop"
        document.getElementById('tim').innerHTML ="5.0.2 Lollipop"
        document.getElementById('claro').innerHTML ="5.0.2 Lollipop"
        document.getElementById('oi').innerHTML ="5.0.2 Lollipop"

        }

        if(itemSelecionado == "Moto G 3ª Geração LTE"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_S;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motog3.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1543</span> \n <span class="label label-primary">XT1544</span> \n <span class="label label-primary">XT1550</span> \n <span class="label label-primary">XT1546</span>'
        document.getElementById('label').innerHTML = "Moto G 3ª Geração"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Março de 2015"
        document.getElementById('retail').innerHTML ="5.1.1 Lollipop (SOAK Test 6.0)"
        document.getElementById('vivo').innerHTML ="5.1.1 Lollipop"
        document.getElementById('tim').innerHTML ="5.1.1 Lollipop"
        document.getElementById('claro').innerHTML ="5.1.1 Lollipop"
        document.getElementById('oi').innerHTML ="5.1.1 Lollipop"

        }

        if(itemSelecionado == "Moto X 1ª Geração"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_N;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motox1.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1058</span>'
        document.getElementById('label').innerHTML = "Moto X 1ª Geração"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Maio de 2013"
        document.getElementById('retail').innerHTML ="5.1 Lollipop"
        document.getElementById('vivo').innerHTML ="5.1 Lollipop"
        document.getElementById('tim').innerHTML ="5.1 Lollipop"
        document.getElementById('claro').innerHTML ="5.1 Lollipop"
        document.getElementById('oi').innerHTML ="5.1 Lollipop"

        }

        if(itemSelecionado == "Moto X 2ª Geração"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_S;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motox2.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1097</span>'
        document.getElementById('label').innerHTML = "Moto X 2ª Geração"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Março de 2014"
        document.getElementById('retail').innerHTML ="5.1 Lollipop (SOAK Test 6.0)"
        document.getElementById('vivo').innerHTML ="5.0 Lollipop"
        document.getElementById('tim').innerHTML ="5.0 Lollipop"
        document.getElementById('claro').innerHTML ="5.0 Lollipop"
        document.getElementById('oi').innerHTML ="5.0 Lollipop"

        }

        if(itemSelecionado == "Moto X Play"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_S;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motoxplay.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1563</span>'
        document.getElementById('label').innerHTML = "Moto X Play"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Agosto de 2015"
        document.getElementById('retail').innerHTML ="5.1 Lollipop"
        document.getElementById('vivo').innerHTML ="5.1 Lollipop"
        document.getElementById('tim').innerHTML ="5.1 Lollipop"
        document.getElementById('claro').innerHTML ="5.1 Lollipop"
        document.getElementById('oi').innerHTML ="5.1 Lollipop"

        }

        if(itemSelecionado == "Moto X Style"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_S;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motoxstyle.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1572</span>'
        document.getElementById('label').innerHTML = "Moto X Style"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Setembro de 2015"
        document.getElementById('retail').innerHTML ="5.1 Lollipop (SOAK Test 6.0)"
        document.getElementById('vivo').innerHTML ="5.1 Lollipop"
        document.getElementById('tim').innerHTML ="5.1 Lollipop"
        document.getElementById('claro').innerHTML ="5.1 Lollipop"
        document.getElementById('oi').innerHTML ="5.1 Lollipop"

        }

        if(itemSelecionado == "Moto X Force"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_S;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motoxforce.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1580</span>'
        document.getElementById('label').innerHTML = "Moto X Force"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Novembro de 2015"
        document.getElementById('retail').innerHTML ="5.1 Lollipop"
        document.getElementById('vivo').innerHTML ="5.1 Lollipop"
        document.getElementById('tim').innerHTML ="5.1 Lollipop"
        document.getElementById('claro').innerHTML ="5.1 Lollipop"
        document.getElementById('oi').innerHTML ="5.1 Lollipop"

        }

        if(itemSelecionado == "Moto Maxx"){

        document.getElementById('duvida_tudo').style.display = 'inline'; 

        document.getElementById('perg_1').innerHTML = pergunta1;
        document.getElementById('resp_1').innerHTML = resposta1_S;

        document.getElementById('perg_2').innerHTML = pergunta2;
        document.getElementById('resp_2').innerHTML = resposta2;

        document.getElementById('perg_3').innerHTML = pergunta3;
        document.getElementById('resp_3').innerHTML = resposta3;

        document.getElementById('perg_4').innerHTML = "Moto E Primeira 4";
        document.getElementById('resp_4').innerHTML = "Moto E Primeira 4";

        document.getElementById('label').style.display = 'inline';
        document.getElementById('imagem').className = 'img-thumbnail';
        document.getElementById('imagem').src = "images/aparelhos/motomaxx.png";
        document.getElementById('aparelhos').innerHTML = 
        '<span class="label label-primary">XT1225</span>'
        document.getElementById('label').innerHTML = "Moto Maxx"
        document.getElementById('label-lancamento').innerHTML = "Lançamento: Maio de 2015"
        document.getElementById('retail').innerHTML ="5.0.2 Lollipop"
        document.getElementById('vivo').innerHTML ="5.0.2 Lollipop"
        document.getElementById('tim').innerHTML ="Não lançou este modelo"
        document.getElementById('claro').innerHTML ="5.0.2 Lollipop"
        document.getElementById('oi').innerHTML ="5.0.2 Lollipop"

        }



    }