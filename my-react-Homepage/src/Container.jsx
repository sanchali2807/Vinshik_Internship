

function Container({ children } ){
return(<>
<div className="first-container">
<div className="second-container">


<div className="btn-container">
  <button className="btn">ALL</button>
  <button className="btn">NOVICE</button>
  <button className="btn">KIDS</button>
  <button className="btn">INTERMEDIATE +</button>
  <button className="btn">ADVANCED</button>
</div>
 <div className="cards-wrapper">
          {children}
        </div>

</div>
</div>
</>);
}
export default Container