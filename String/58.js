int lengthOfLastWord(string s)
{
    if (s.empty()) 
        return 0;
    s += " ";
    string temp = "";
    vector<string> res;
    for (char ch : s)
    {
        if (ch == ' ')
        {
            if (!temp.empty()) //要不要判断非空取决于给定的字符串有没有前置或者后置的空格
            {
                res.push_back(temp);
                temp.clear();
            }
        }
        else
            temp += ch;
    }
    if (res.empty())
        return 0;
    return res.back().size();
}