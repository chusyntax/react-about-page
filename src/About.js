import styles from './About.module.css'


function About(){
return(

<section>

    <h1 className={styles.heading}>About Me</h1>

    <div className={styles.aboutGrid}>
        <div>
        <div className={styles.information}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti amet laborum vitae! Consequuntur voluptatem aliquam quae reprehenderit vero rerum minus at facere voluptates saepe, impedit incidunt ab mollitia vel error temporibus in dolores voluptate ut nesciunt aperiam ratione maxime. Repellendus, omnis cum excepturi, illo hic quibusdam fuga similique dolore perspiciatis, quos ipsum quod. Deserunt accusamus, minus aspernatur facilis esse dolor.</p>
        </div>
        </div>
       
       <div>
           <h1>Tech</h1>
       <div className={styles.iconGrid}>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
        </div>
       </div>
       
    </div>
</section>

);
}

export default About