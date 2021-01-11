import Container from '@material-ui/core/Container'
import React, { useEffect } from 'react'
import MainLayout from '../../templates/MainLayout/MainLayout.page'

const Imprint = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <MainLayout>
            <h1>Impressum</h1>
            <Container maxWidth="md">
                <div className="section">
                    <div className="content">
                        <h4>Angaben gemäß § 5 TMG</h4>
                        <p>
                            karmakurier GbR
                            <br />
                            Bergstraße 1<br />
                            69120 Heidelberg
                        </p>
                        <h4>Vertreten durch:</h4>
                        <p>
                            Dr. Andreas Geburtig-Chiocchetti
                            <br />
                            Bergstraße 1<br />
                            69120 Heidelberg
                            <br />
                            Telefon: +49 (0) 1717750791
                            <br />
                            E-Mail: info@karmakurier.org
                        </p>
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur
                            Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                        <h4>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h4>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                            vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                        <h4>Haftung für Inhalte</h4>
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
                            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                            bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                            übermittelte oder gespeicherte fremde Informationen zu überwachen oder
                            nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                            hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
                            entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                            entfernen. Haftung für Links Unser Angebot enthält Links zu externen
                            Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
                            können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                            die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                            ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                            Links umgehend entfernen.
                        </p>
                        <h4>Urheberrecht</h4>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                            jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
                            sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                            werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                            Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
                            wir derartige Inhalte umgehend entfernen.
                        </p>
                    </div>
                </div>
            </Container>
        </MainLayout>
    )
}

export default Imprint
