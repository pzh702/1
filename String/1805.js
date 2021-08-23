int numDifferentIntegers(string word)
{
    set<string> s;
    string temp = "";
    word += 'a';  //在字符串的末尾加上一个字母，这样遍历到最后的时候如果有整数就不会被遗漏
    for (char ch : word)
    {
        if (isalpha(ch)) 
        {
            if (!temp.empty()) //如果遇到字母且临时字符串非空，就把它加入集合并重置临时字符串
            {
                s.insert(temp);
                temp.clear(); 
            }
        }
        else  //如果遇到数字
        {
            if (temp == "0")  //如果之前有过前导0(注意这里不是temp.back()=='0',因为前导0的前面肯定是字母,如果不是字母就不是前导0)
                temp.clear(); //清空前导0
            temp += ch;
        }
    }
    return s.size(); //集合大小就是不同整数数量
}