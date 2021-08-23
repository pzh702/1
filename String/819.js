string mostCommonWord(string paragraph, vector<string> &banned)
{
    paragraph += ' ';
    string temp = "";
    map<string, int> m;   //哈希表记录单词出现频次
    set<string> ban(banned.begin(), banned.end()); //把禁用列表放到集合中方便查找
    for (char ch : paragraph) 
    {
        if (!isalpha(ch)) 
        {
            if (!temp.empty())
            {
                m[temp]++;
                temp.clear();
            }
        }
        else
            temp += tolower(ch);  //注意返回的是小写字母
    }
    vector<string> words;
    for (auto p : m)
        words.push_back(p.first);
    sort(words.begin(), words.end(), [&](string &s, string &p) { return m[s] > m[p]; }); //按照频次降序
    if (banned.empty()) //如果没有禁用单词，直接返回排序后列表首元素
        return words[0];
    for (auto w : words) //否则在禁用列表中查找，第一个没有的单词就返回
        if (ban.find(w) == ban.end())
            return w;
    return "";
}