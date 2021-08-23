string sortSentence(string s)
{
    s += " ";
    string temp = "";
    vector<string> res;
    for (char ch : s)
    {
        if (ch == ' ')
        {
            res.push_back(temp);
            temp.clear();
        }
        else
            temp += ch;
    }
    s.clear();
    sort(res.begin(), res.end(), [&](string &a, string &b) { return a.back() < b.back(); });
    for (auto &str : res)
    {
        str.pop_back();
        s += str + ' ';
    }
    s.pop_back();
    return s;
}