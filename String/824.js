string toGoatLatin(string s)
{
    s += " ";
    string temp = "";
    string vowels = "aeiouAEIOU";
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
    for (int i = 0; i < res.size(); i++)
    {
        if (vowels.find(res[i][0]) != -1)
            s += res[i];
        else
        {
            string t = res[i] + res[i][0];
            t.erase(t.begin());
            s += t;
        }
        s += "ma";
        s.insert(s.size(), i + 1, 'a');
        s += ' ';
    }
    s.pop_back();
    return s;
}