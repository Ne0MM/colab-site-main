import styles from './ComponentStyles/StaticLogo.module.css'

export default function StaticLogo() {

  const card = [
    "#7f00ffe6",
    "#ff0000e5",
    "#ff7f00d9",
    "#ffff00e5",
    "#00ff00d9",
    "#037fffe6",
    "#0000ffda",
    "#ff00ffd9",
    "#7f00ffe6"
  ]

  const deg = [
    0,
    45,
    90,
    135,
    180,
    225,
    270,
    315,
  ]


  return (
    <div className={styles.logoContainer}>

      <div className={styles.centerLogo}>

        <span>C</span>

      </div>
        


      <div className={styles.card}
      style={{
      ['--card-deg'] : deg[0] + "deg",
      ['--z-index'] : 1}}>

        <div 
        className={styles.cardInside}
        style={{
        ['--card-color'] : card[0]}}
        ></div>

      </div>

      <div className={styles.card}
      style={{
      ['--card-deg'] : deg[1] + "deg",
      ['--z-index'] : 0}}>

        <div 
        className={styles.cardInside}
        style={{
        ['--card-color'] : card[1]}}
        ></div>

      </div>

      <div className={styles.card}
      style={{
      ['--card-deg'] : deg[2] + "deg",
      ['--z-index'] : 1}}>

        <div 
        className={styles.cardInside}
        style={{
        ['--card-color'] : card[2]}}
        ></div>

      </div>


      <div className={styles.card}
      style={{
      ['--card-deg'] : deg[3] + "deg",
      ['--z-index'] : 0}}>

        <div 
        className={styles.cardInside}
        style={{
        ['--card-color'] : card[3],}}
        ></div>

      </div>

      <div className={styles.card}
      style={{
      ['--card-deg'] : deg[4] + "deg",
      ['--z-index'] : 1}}>

        <div 
        className={styles.cardInside}
        style={{
        ['--card-color'] : card[4]}}
        ></div>

      </div>

      <div className={styles.card}
      style={{
      ['--card-deg'] : deg[5] + "deg",
      ['--z-index'] : 0}}>

        <div 
        className={styles.cardInside}
        style={{
        ['--card-color'] : card[5]}}
        ></div>

      </div>

      <div className={styles.card}
      style={{
      ['--card-deg'] : deg[6] + "deg",
      ['--z-index'] : 1}}>

        <div 
        className={styles.cardInside}
        style={{
        ['--card-color'] : card[6]}}
        ></div>

      </div>

      <div className={styles.card}
      style={{
      ['--card-deg'] : deg[7] + "deg",
      ['--z-index'] : 0}}>

        <div 
        className={styles.cardInside}
        style={{
        ['--card-color'] : card[7]}}
        ></div>

      </div>
    </div>
  )
}
