import { getDictionary } from '@/get-dictionary';
import DownloadHacFiles from '../components/download-hac-files';


export default async function Collaborate({
  params
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <DownloadHacFiles filename="hac-en.zip"/>
      <DownloadHacFiles filename="hac-es.zip"/>
      <DownloadHacFiles filename="hac-pt.zip"/>
      <h1>{dictionary['share']['text']}</h1>
    </div>
  );
}
