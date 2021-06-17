player1 = localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1 + ":";
document.getElementById("player2_name").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn:" + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn:" + player2;

function send()
{
    var get_word = document.getElementById("word").value;
    var word = get_word.toLowerCase();
    console.log("Word in Lowercase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length = Math.floor(word.length/2);
    charAt2 = word.charAt(length);
    console.log(charAt2);

    length_minus = word.length - 1;
    charAt3 = word.charAt(length_minus);
    console.log(charAt3);

    var remove_charAt1 = word.replace(charAt1,"_");
    var remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    var remove_charAt3 = remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word = "<h4 id='display_word'> Q."+ remove_charAt3+"</h4>";
    input_box = "<br> Answer: <input id='input_check_box' type = 'text'>";
    check_button = "<br> <button class= 'btn btn-info' onclick= 'check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
} 

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer= document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase:"+ answer);

    if (answer == word)
    {
        if (answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else 
        {
            player2_score = player2_score + 1;
            document.getElementById("playe2_score").innerHTML = player2_score;
        }


    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn:"+ player2;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn:"+ player1;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn:"+ player2;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn:"+ player1;
    }

    document.getElementById("output").innerHTML = "";
}