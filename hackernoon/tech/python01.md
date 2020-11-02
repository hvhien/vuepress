---
home: true
footer: Dịch bởi vanhienfs 
---
# A Guide to Extracting All links on website using Python
## Hướng dẫn trích xuất tất cả các links trên website bằng python
![alt](https://firebasestorage.googleapis.com/v0/b/hackernoon-app.appspot.com/o/images%2FAURTLQvt67O9A2fTYbN0UXvtzYI3-vci3wxc.jpeg?alt=media&token=f04982b0-2e22-4689-ba8f-e2f442bd1a22)
Trong  hướng dẫn này, bạn sẽ được học làm thế nào để trích xuất tất cả các links từ 1 trang web hoặc URL khi sử dụng ` BeautifulSoup` và các yêu cầu.

Nếu bạn là một người mới về `web scraping` tôi khuyên bạn hãy bắt đầu với [hương dẫn Web Scraping cho người mới](https://kalebujordan.com/web-scraping-in-python-tutorial/?ref=hackernoon.com) và sau đó hãy đọc bài viết này khi bạn đã hiểu phần cơ bản.


### How Do We Extract All Links?
#### (làm thế nào chúng ta có thể trích xuất tất cả các links)

Chúng ta sẽ sử dụng thư viện `requests` để lấy các Element `HTML` thô của page từ Website và sau đó chúng ta sẽ dùng `BeautifulSoup` để trích xuất tất cả các link từ trang HTML mà chúng ta vừa get về.

### Requirements
Bạn cần cài đặt các thư viện cần thiết để có thể tiếp tục theo dõi bài viết
```bash
pip install requests && pip install beautifulsoup4
```
Bên dưới là một đoạn code sẽ yêu cầu bạn nhập một URL(link) đến 1 website và sau đó nó sẽ sử dụng `requests` để gửi yêu cầu GET đến server để yêu cầu trang HTML tiếp theo chúng ta sẽ dùng thư viện beautifulsoup để trích xuất tất cả các thẻ liên kết trong trang HTML.

```python
import requests from bs4
import BeautifulSoup 
def extract_all_links(site):
    html=requests.get(site).text
    soup=BeautifulSoup(html,'html.parser').find_all('a')
    links=[link.get('href') for link in soup]
    return links
site_link = input('Enter URL of the site : ')
all_links = extract_all_links(site_link)
print(all_links)
```

### Output
```bash
Enter URL of the site :abcxyz
```

Tôi hi vọng bạn sẽ thấy nó hữu ích 

