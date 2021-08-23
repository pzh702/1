string truncateSentence(string s, int k)
{
    s += " ";  //在句子末尾加一个空格，这样最后一个单词就不会因为没有后面的空格而被遗漏
    string temp = "";
    vector<string> res;
    for (char ch : s)
    {
        if (ch == ' ') //如果遇到空格就输出前面的字符串
        {
            res.push_back(temp);
            temp.clear();
        }
        else
            temp += ch;
    }
    for (int i = 0; i < k; i++)
        temp += res[i] + ' ';
    temp.pop_back();
    return temp;
}