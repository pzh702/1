string reverseWords(string s)
{
    if (s.empty())
        return "";
    s += " ";
    string temp = "";
    vector<string> res;
    for (char ch : s)
    {
        if (ch == ' ')
        {
            if (!temp.empty())
            {
                res.push_back(temp);
                temp.clear();
            }
        }
        else
            temp += ch;
    }
    s.clear();
    reverse(res.begin(), res.end());
    for (string &str : res)
        s += str + ' ';
    s.pop_back();
    return s;
}