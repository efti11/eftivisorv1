// import { useState, useEffect, useMemo } from 'react';
// import { useRouter } from 'next/router';
// import SearchResult from './SearchResult.jsx';
// import Loading from '../misc/Loading.jsx';
// export default function ArticleSearchPage() {
//     const router = useRouter();
//     //const [query, setQuery] = useState(() => router?.asPath?.split('=')[1]);
//     //const currentQuery = useMemo(() => ({ "query": value.query, "setQuery": value.setQuery }), [props.query, props.setQuery]);

//     const pathName = useMemo(() => router ? router.asPath.split('=')[1] : null);

//     const [results, setResults] = useState(null);
//     const handleSubmit = async (e) => {
//         if (e) {
//             e.preventDefault();
//             //setQuery(e.target.query.value);
//             router.push(`/articles?keyword=${e.target.query.value}`)
//             getArticles(e.target.query.value)
//         } else {
//             router.push(`/articles?keyword=${props.query}`)
//             getArticles(currentQuery.query)
//         }


//     }
//     async function getArticles(qr) {
//         if (qr) {
//             if (Array.from(qr).includes(' ')) {
//                 let qry = qr.replaceAll(' ', '-');
//                 let str = String(qry);
//                 const res = await fetch('https://abschill.com/articles/keyword/' + str);
//                 const data = await res.json();
//                 setResults(data);
//             } else {
//                 const res = await fetch('https://abschill.com/articles/keyword/' + qr);
//                 const data = await res.json();
//                 setResults(data);
//             }
//         } else {
//             const res = await fetch('https://abschill.com/articles/');
//             const data = await res.json();
//             //console.log(data);

//             setResults(data.articles);
//         }
//     }

//     useEffect(() => getArticles(router?.asPath?.split('=')[1]), []);
//     useEffect(() => getArticles(pathName), [pathName])
//     return (

//         <div>
//             <div className="formContainer">
//                 <form onSubmit={handleSubmit}>
//                     <div className="formWrapper">
//                         <input placeholder="Filter Results (eg. 'react')" type="text" name="query" />
//                         <button type="submit">Search</button>
//                     </div>

//                 </form>
//             </div>

//             <div className="serpContainer">
//                 {results ? results.map(result => <SearchResult result={result} key={result._id} />) : <Loading />}
//             </div>
//         </div>

//     );
// }

// import Link from 'next/link';
// const SearchResult = (props) => {
//     return (
//         <Link href={`/articles/${props?.result?.name}`}>

//             <a className="serpLink">
//                 {/* <div className="serpHover">
//                     <div>{props?.result?.title} - </div>
//                 </div> */}
//                 <div >
//                     <div className="serpWrapper"><img alt="icon" src={props?.result?.img} /><span className="uppercase">{props.result.title}</span>&nbsp; - {props?.result?.idx}</div>
//                 </div></a>
//         </Link>)

// }
// export default SearchResult;
// import { useState, useEffect, useRef, useMemo } from 'react';
// import ArticleNav from './ArticleNav.jsx';
// import ArticleContext from './ArticleContext';
// import Carousel from './Carousel.jsx';
// import Loading from '../misc/Loading.jsx';
// const Article = ({ article }) => {
//     const [display, setDisplay] = useState(false);
//     const articleRef = useRef(null);
//     const articleMemo = useMemo(() => (articleRef), [articleRef]);
//     const [slideCount, setCount] = useState(article?.slides);
//     const [syllabus, setSyllabus] = useState(null);
//     const [slides, setSlides] = useState([]);
//     const [embed, setEmbed] = useState(null);
//     useEffect(() => {

//         if (article) {
//             setEmbed('https://docs.google.com/presentation/d/e/' + article.embed + '/embed');
//             fetch(`https://abschill.com/articles/${article.name}?format=html`)
//                 .then(res => res.text()).then(data => setSyllabus(data));
//         }

//     }, [article]);

//     useEffect(() => article ? setCount(article.slides) : () => { }, [article]);
//     useEffect(() => {
//         if (slideCount && slideCount > 1) {
//             const output = [];
//             for (let i = 0; i < slideCount; i++) {
//                 if (i + 1 >= 10) {
//                     output.push(`https://d24hicsohgfvzu.cloudfront.net/${article.name}/${article.name}-${i + 1}.png`);
//                 } else {
//                     output.push(`https://d24hicsohgfvzu.cloudfront.net/${article.name}/${article.name}-0${i + 1}.png`)
//                 }

//             }
//             setSlides(output);
//         }
//     }, [slideCount]);
//     let returnData;
//     if (article) {
//         returnData = (
//             <div className="articleContainer">
//                 <ArticleNav element={articleRef} togglePDF={setDisplay} display={display} article={article} pdf={`https://abschill.com/articles/${article.name}?format=pdf`} />
//                 {
//                     display ? (
//                         <div ref={articleMemo} className="slideShow" >
//                             <iframe src={embed} frameBorder="0" width="1440" height="839" allowFullScreen="true" mozAllowFullScreen="true" webkitAllowFullScreen="true"></iframe>
//                         </div >
//                     ) : <div className='course' dangerouslySetInnerHTML={{ __html: syllabus }} ></div>}

//             </div >
//         )
//     } else {
//         returnData = <Loading />

//     }
//     return returnData
// }

// export default Article;

// .course{
//     display:flex;
//     justify-content:center; 
//   }
//   .syllabus{
//     border-radius:1rem;
//     color:var(--link-darken);
//     background-color:rgba(var(--root-bg),0.5);
//     padding:2.5rem;
//     text-align:left;
//     width:60%;
//     box-shadow:0 0 2px 1px rgba(0,120,200, 0.4);
//   }
//   .syllabus a{
//     padding:1rem;
//     margin:.4rem;
//     box-shadow:0 0 2px 1px rgba(var(--root-bg), 0.2);
//   }
//   .syllabus a:hover{
//     transition-duration:200ms;
//     transition-timing-function: ease-in-out;
//     /* text-decoration:underline; */
//     box-shadow:0 0 4px 2px rgba(var(--root-bg), 0.18);
//   }
//   .syllabus a:hover{
//     transition-duration:200ms;
//     transition-timing-function: ease-in-out;
//     box-shadow:0 0 4px 2px rgba(var(--root-bg), 0.18);
//   }
//   .syllabus h1{
//     font-size:4rem;
//   }
//   .syllabus ul{
//     color:var(--link-lighten);
//     list-style:none;
//     font-size:1.2rem;
//   }
//   .syllabus ul li{
//     padding:1rem;
//   }
//   .syllabus ul li::after{
//     display:inline-block;
//     width:20px;
//     height:25px;
//     padding-right:1rem;
//     content:'';
//     background: url('/logotest.png') no-repeat center/cover;
//   }