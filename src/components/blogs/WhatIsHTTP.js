import React, { Component } from 'react';
import { Container} from 'reactstrap';
import { Helmet } from 'react-helmet';

class WhyCreateABlog extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>What is HTTP? | Keenan Irvin-Benning</title>
          <meta name="description" content="HTTP (Hypertext Transfer Protocol) is a protocol for transfering resources across the internet. It is the
            the foundation for which the internet is built upon." />
        </Helmet>
        <Container>
          <h3 className="page-title">What is HTTP?</h3>
          <h5> By Keenan Irvin-Benning | Feb.19.2019 | Networking | Reading Time: 3 min</h5>
          <p>
            HTTP is the protocol that allows us to do all the amazing things on the internet we have become reliant on the past 30 something years. 
            <br />
            <br />
            Whether that’s buying things you don’t need online, reading this blog article, or binging YouTube videos on Game of Thrones theories at 
            1:30 in the morning. 
            <br />
            <br />
            IT (Information Technology) has a million acronyms and it is overwhelming at first. 
            <br />
            <br />
            HTTP stands for Hyper Text Transfer Protocol and it basically enables communication between different physical systems and the retrieval 
            of resources. 
            <br />
            <br />        
            It is also platform independent which was a huge advantage for its rapid adoption in the early 90s.
            <br />
            <br />
            It was created by <a href="https://en.wikipedia.org/wiki/Tim_Berners-Lee" rel="noopener noreferrer" target="_blank">Sir Timothy John 
            Berners-Lee</a> in 1989 and is now managed by the <a href="https://www.w3.org" rel="noopener noreferrer" target="_blank"> W3C</a>, 
            the main international standards organization for the World Wide Web whom he directs. 
            <br />
            <br />
            Anyone who has “googled” a topic on their computer or mobile device may have noticed the “http” prefix in the search bar. This is what 
            we call the <strong> URL scheme.</strong> It tells the browser how to access a specific resource. 
            <br />
            <br />
            HTTP allows us to type words into a browser or open an app and 
            receive the content we desire. Your browser/app is using HTTP to talk to a special computer (a web server) somewhere in the world to 
            retrieve that content.
            <br />
            <br />
            Back in 2017 when you googled “What is a bitcoin?”, your browser made a request to a web server, the web server accepted it, determined 
            what needed to be sent back, and sent a response back to your browser. 
            <br />
            <br />
            When you clicked on the first result (<a href="http://en.wikipedia.org/wiki/Bitcoin" rel="noopener noreferrer" target="_blank">
            http://en.wikipedia.org/wiki/Bitcoin</a>), you told your browser that “en.wikipedia.org” is the <strong> host</strong> which is the web 
            server that is storing the resource you’re looking for.
            <br />
            <br />
            The “/wiki/Bitcoin” is the <strong> URL path</strong> and the host should know what resource this is referring to and what to do next. 
            Together the URL scheme, host, and URL path create the URL or <strong>uniform resource locator</strong>. 
            <br />
            <br />
            Typically, the resources sent back are special codes, addressees, and files (a HTML document combined with CSS stylesheets, Javascript 
            files, images, videos and more) to create the page you are viewing. 
            <br />
            <br />
            I would explain more about HTML, CSS, and Javascript but they each deserve their own blog post.
            <br />
            <br />
            This wraps HTTP up but it is not the only protocol out there. There’s also but not limited to
            <a href="https://en.wikipedia.org/wiki/Internet_protocol_suite" rel="noopener noreferrer" target="_blank"> FTP, SSH, SMTP, UDP, and the 
            familiar HTTPS. </a>
            <br />
            <br />
            I’ll definitely go into more detail about HTTPS as 
            <a href="https://www.blog.google/products/chrome/milestone-chrome-security-marking-http-not-secure/"  target="_blank">it has become the 
            standard for which websites are now judged</a>, I’m looking at you 
            <a href="http://www.espn.com/" rel="noopener noreferrer" target="_blank">ESPN</a>. In short, it’s a more secure version of HTTP. 
            <br />
            <br />
            This is a very simple explanation but covers the basics of what HTTP is, why it’s needed, and what it does. 
            <br />
            <br />
            After reading this you likely know more about HTTP than all your non-tech friends and I call that a win. Cheers to growth!
          </p>       
        </Container >
      </div >
    )
  }

}
export default WhyCreateABlog;