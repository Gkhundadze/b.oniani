import Poem from './poem/Poem';
import './poems.css'

let poemsData = [
    {
        poemId: 1,
        poemTitle: 'თანა ავტორული',
        poemItself: 'ვერღარ გაგიხსენებ უკვე სამომავლოდ, ახლა ნოემბერის ვიცი 11ტია, შენი გაღიმება როგორ მწყუროდადა, მოვყვე დანარჩენი მგონი ზედმეტია, ალბათ სიბერისკენ თმას რომ დაითეთრებ, დილით გაღვიძებულს გხვდება განთიადი, სანამ წამოდგები კარგად გაიხსენე, ერთდროს დაგიძახე ჩემი ათინათი, ისე გაიღიმე არც კი შეიმჩნიო, სწრაფად დაივიწყე როგორც კოშმარები, მალე მოიფიქრე სულსხვა ისტორია, სანამ შვილიშვილთან გვერდით მოთავსები. იცი რას დაწერდა ჩემი ისტორია? მორევს ურევია შენი დალალები ყოველ განთიადზე ახლა ის მგონია რომ შენს ნაფეხურებს ამკობს ბალადები. ისევ იზეიმებს ჩემში სიმარტოვე ისევ ამერევა დროში  წამები შენ ის სტრიქონი ხარ რომ, ვერ მივატოვე და ეს კალამია შენი თვალები. თუმცა ვის ანაღვლებს ჩემი ისტორია ანდა ვის ანაღვლებს შენი თვალები შემდეგ განთიადზე ახლა ის მგონია სუნთქვას შეაჩერებს დროში წამები. თუმც რაც მაბადია! ჩემი კალამია, ჩემი კალამია შენი თვალები..'
    },
    {
        poemId: 2,
        poemTitle: 'ჩვენ ორნი ერთად',
        poemItself: 'ჩვენ ორნი ერთად! დასალიერს გავფრინდებოდით, ეს იქნებოდა! სიყვარულის გადაჭარბება. მაგრამ იმდენად,  შენ ნამდვილად არ გჭირდებოდი! რომ, ჩემთან ერთად გაგემართა გადასახლება. რაოდენ მძიმე! და ნამდვილი საზღაურია რომ, ჩემი გული დასაფლეთად ყორნებს მიჰგვარე. რაც გადამარჩენს ახლა მხოლოდ სასწაულია, სასწაულია ისიც! ასე რომ, შეგიყვარე!. ეს განშორება შემოდგომის ფოთლებს მაგონებს. როცა ქარების ხეტიალში იფანტებიან, მაგრამ თუ იცი უფრო მეტად მე რა მაღონებს? ის რომ, გაზაფხულს კვლავ თავიდან იბადებიან. ეს იყო ნება და ეგ ნება უკეთურია, მე შენი სული შევიერთე უკიდეგანოდ. ახლა ეს გრძნობა  იმდენადვე უბედურია, ვითარცა ცვენა! ვარსკვლავების, ცაზე უმთვაროდ. როგორ შეძელი ის რაც ფიქრად არ გამივლია, ან იქნებ მე ვერ დაგანახე მეტი ნათელი. თუკი ასეა ქარაგმები გადამივლიან, და სამუდამოდ დაიღვრება ჩემი სანთელი. ჩვენ ორნი ერთად დასალიერს გავფრინდებოდით .'
    },
    {
        poemId: 3,
        poemTitle: 'ემიგრანტია',
        poemItself: 'ემიგრანტია! რაც უფრო ეს ხშირად გაისმის, სული მიწუხს და გულიც უფრო ძლიერ მიკვდება, შენ რომ ქართველო! დავიწყება გიწევს სახლის გზის, ნეტავი მართლა როს გვეღირსოს ჩვენ გაღვიძება!. ბევრმა არ იცის, თუ რას ნიშნავს უცხო გარემო! ეს იგივეა მოგიმზადონ გილიოტინა. მაშინ იტყოდი, ეს რას ხედავ ჩემო თვალებო! რომ,  დედამ შვილი საფლავზეც კი  ვერ დაიტირა. რომ იმედია! ახლა  მხოლოდ რაც გვაიმედებს, და იმედებიც, სამწუხაროდ კვლავ ცრუვდებიან. მწამს გამჩენელი რომ ერთხელაც ძღვენს გაიმეტებს, და სამშობლოში შობილები დაბრუნდებიან. მე ისე მიმძიმს ყოველი ეს როგორ ავღწერო, ისიც მინახავს როგორ მიაქვთ მიწა ქართველებს. არ ვისურვებდი რომ ოდესმე ისევ დავწერო, თუ ეს ეპოქა როგორ უმძიმს ვაჟა-ფშაველ ერს! შენ ემიგრანტო! კიარ უნდა ემიგრანტობდე, არამედ ნება უნდა იყოს თავისუფალი. მძაგს ფაქტი როცა, სხვის მიწაზე ერისკაცობდე, და რომ ხელს აწერს, ამას მშვიდათ ხელისუფალი. როცა შენს თავში ნოსტალგია იწვევს დორიანს, და მერე თვალებს ცრემლების ზღვა მოეფინება. მოლოდინები სამწუხაროდ ისევ მდორეა, რომლებიც ნელა მაგრამ მაინც მოედინება. ემიგრანტია! რაც უფრო ეს ხშირათ გაისმის...'
    },
    {
        poemId: 4,
        poemTitle: 'იანვრის 12',
        poemItself: 'რას ამბობს ღამე და რას იტყვის პოეტი, ქარაგმობს სარკმელთან იანვრის 12. ძნელია სიცივის, ყოველი პორტრეტი , ამდენი სიცრუის რამდენი მომენტი. შიშების მანტიამ არწია დარები, წამებით ქარიან, გაქრიან ქარები. რომ სული გალიონ გაცვითონ ფიქრები,  ხომ გარდუვალია რომ, აღარ ვიქნები. რას ამბობს ღამე და რას იტყვის პოეტი, ქარაგმობს სარკმელთან იანვრის 12. შეიშრო ცრემლი თუ დაღვარა ცრემლები, ზეიმობს ჭაღარა როს დავიფერფლები. შენებით, ნგრევებით, გარბიან დროები, რაც უფრო ახლოა მას უფრო ვშორდები. ვიცხოვრე ფუჭად თუ ვიხილე ფუჭები, და ბოლოს ერთია გზები და ქუჩები. რას ამბობს ღამე და რას იტყვის პოეტი, ქარაგმობს სარკმელთან იანვრის 12. უხვია სიშორე ახლოა შორეთი, მისსავე ლეშებზე დამსხდარი ქორები. მრწამსია სიცოცხლე, ვერსიად ხომ ერთი, მე მისთვის ვიცოცხლებ! რისთვისაც მოვედი..'
    },
    {
        poemId: 5,
        poemTitle: 'გრძნობების რისხვა',
        poemItself: 'მინდა გიმხილო მე ახლა ის რაც, ვერ გაგიმხილე უხსოვარ დროში, ვერ გადავურჩი გრძნობების რისხვას, დღეს კი გამხელას მე ასე მოვრჩი. მსურს დავაფიქრო მშვენება შენი. შენი თვალების ერთგული კერა, საოცარია! სისხლი, და გენი, საოცარია! თვით შენი მზერა. ჩემს საზღვრებში კი უთუოდ მწადის, ქანცგალეული, ფერებით ტკბობა. ვუერთგულებდი უსაზღვროდ წადილს, რომელსაც წადის შენეულს თრობა. მაგრამ შეხვედრების გავიდა დრო, ახლა შეხვედრები ლექსებს მივანდე. აწ და მარადის მსურს გითხრა, რომ ჩემში დარი ხარ, ყოველ წვიმამდე. გადამერივნენ ცნობიერები, შენი ერთგული დავრჩი მიჯნურად. მგესლავენ შენი მორიელები, რომ შენ მოგბარდე მარადიულად. და რომც დავნებდე გარდაცვალებას, იქაც პოეტის, დაგწერს კალამი. მე შენს გარეშე გადასახლებას, მიწიერთაგან ვერ დავმალავდი!. დაე იაროს, დროში! სივრცეში! მშვენიერების შენმა ლეგენდამ. ყოველის სახე, ესრედ პირქუში! ცვალოს, ყოფითვე ბედნიერებამ. ყოველ ღამ ვხედავ შენს გულზე მზის სხივს, და მერე ასე წერენ მუზები. თვალები ისევ მალავენ ქირქილს, მაგრამ ვერ მალავს შენი ტუჩები. ისევ და ისევ ვსაზრდოობ შენით, წასვლა უშენოდ, “მე” არსად მსურდა. მინდა რომ ხელზე შეგეხო ხელით, მერე რომც მოვკვდე არ მინდა ხურდა.'
    },
    {
        poemId: 6,
        poemTitle: 'ისევ ისე',
        poemItself: 'დღეს ისევ ისე შეიფერებს შენი თვალები, და ისევ ისე ამბორს ადტეხს იასამანი, დღეს ისევ ისე შეამკობენ წუთებს წამები, და ისევ ისე გაივლიან გზები სავალი. შენ რომ არასდროს დაინაღვლო! ეგ მსურს ქალაუ, მსურს  სულ ამკობდე დედამიწას გაღიმებისას, ხომ ლამაზია! ,, მზეც,,არ არის შენისთანაო, და არც ჩანჩქერი მთის ლოდებზე გადმოდენისას. იქნებ დაგეშვა ეგეც ერთი გამონაკლისი, თუგინდაც მერე კვლავ გადიქცეს გამონაკლისად, რომ სიყვარული! გადაიქცეს გაუსაძლისი და წამიერად შეგიყვარდე გაუსაძლისად. ხომ ეს ცხოვრებაც, უკუღმართი დიადემაა! და მერე ის რომ ზღვებს მორეკავს ისევ ქარები. გზა წუთი სოფლის როგორ მალე გვიანდება და ამ სამყაროში შენ ხარ მისი ყველა დარები. კვლავ ვისურვებდი რომ ერთხელაც გამოიდაროს, დარაბებს მიღმა! მინდორ-ველი ია-ვარდობდეს. შენმა სურნელმა ზედაპირზე ჩამოიაროს და მის წიაღში ფეხაკრებით იალაღობდეს. დღეს ისევ ისე შეიფერებს შენი თვალები, და ისევ ისე ამბორს ასტეხს იასამანი. დღეს ისევ ისე შეამკობენ წუთებს წამები, და ისევ ისე გაივლიან გზები სავალი.'
    },
    {
        poemId: 7,
        poemTitle: 'ომების სკოლა',
        poemItself: 'შენ ზეციერო! დაუმკვიდრე, ადგილი მათ ვინც, თავი შეწირა უსამართლო დაუდევრობას. რადგან სიცოცხლე, სამარისთვის ნამდვილად არ ღირს. თუ კი ეს სისხლი გარდანისლავს ამ უდღეობას. წვიმამ მოიცვა, ეს სამყარო ოღონდ ტყვიების, თითქოს ეს არის სწორედაც რომ, დანიშნულება. უნდა დასრულდეს სადისტური ხოცვა შვილების, სანამდის მეტი ნაკვალევი გაიხურება. მაგრამ ვის ესმის, და ვინც ესვრის, მან ეს იცოდეს, უფლება არ გაქვს დაასრულო არსება სხვისი. ადამიანი უფრო მეტს რომ შესატყვისობდეს, მეტად სხვაგვარი იქნებოდა გაგება მისი. როცა სამშობლოს, მეომარი იცავს დაჭრილი, და რომ სამშობლო მას თვალებში ესაუბრება. ეს ყოველივე გახლავთ მხოლოდ მცირე ნაწილი, რასაც ეს ლექსი გულ-წუხილით ეხმაურება. მოვა დრო როცა საზღვრები სულ დასრულდებიან, მოიმკის ყველა იმას რასაც დაიმსახურებს. ომების სკოლა სამუდამოდ წარსულდებიან, მაშინ როდესაც აქ მშვიდობა დაისადგურებს.'
    },
    {
        poemId: 8,
        poemTitle: 'დედის გვერდიდან',
        poemItself: 'დედი თვალები უღიმღამოდ როცა გეშვება, და შენი გული ჩვეულ რიტმებს არღვევს მკერდიდან. ამ ლექსის პირველ! სტრიქონიდან სულ შენ გეძღვნება, სამყაროს ერთო! გადაშლილო, დედის გვერდიდან. როს ეს ისეა, რომ და თითქოს ვერ შეეხები, თითქოს მირაჟის მოვლენაა შეუხებელი. მაგ სიმამაცით ღვთის მშობელსაც კი შეედრები, რომ შვილისათვის მარადის ხარ შეუდრეკელი. მე კი არვიცი, შენზე მეტად როგორ მიყვარდე, არვიცი სხვა რა, არის უფრო აღუწერელი. შვილზე ფიქრები გიგრძელდება ისევ დილამდე, ციხე სიმაგრის, კარიპჭე ხარ აუღებელი. როცა სავსაობ, ჩემს სახეზე შენი ხელებით, და შენი სუნთქვია ჰარმონიით მეალერსება, ის სიტკბოება მახსენდება ნაზი ბგერებით, მთელი სიუხვით თოთო ბავშვს რომ მოეფერება. და როცა თმაში ეგ ჭაღარა გაგიხშირდება, არ დაიდარდო! რადგან მე მაქვს სადარდებელი. ჩემი არსება უფრო მეტად გაგიფრთხილდება, რომ დიდხანს მყავდე წუთისოფელს სახარებელი. დედი თვალები უღიმღამოდ როცა გეშვება, და შენი გული ჩვეულ რიტმებს არღვევს მკერდიდან. ამ ლექსის ბოლო სტრიქონიდან სულ შენ გეძღვნება, სამყაროს ერთო! გადაშლილო დედის გვერდიდან.'
    },
    {
        poemId: 9,
        poemTitle: 'დალალ-ხვეული',
        poemItself: 'შენი სურნელი თან დამდევს, ხოდა მეც დავალ ეული, დაგიკოცნიდი დალალებს! დალალებს, დალალ-ხვეული. როცა მაგ სახეს დაგადნეს, ბაგემან სუნთქვის თრთოლებამ. ვიგრძენ გულს როგორ გამათბეს, გრძნობების გამოქროლებამ. ნეტავ რას იტყვის თვალები? შეფერილ უცხო ფერიან. სამყაროს შენ ნადარები შეგსუნთქავ მისვე მტვერიან. შენახარ სწორედ სამოთხის! ამა ქევეყამას შობილი, არვიცი დღეს, ხვალ, ან როდის გიხილქვ გამოცნობილი შენი სახელი ამ გულში მარადისობას დაეძებს და როგორც იმ ძველ წარსულში კვლავ გაგიყოფდი სარეცელს წამით შეგეხო თუნდაც დრომ, გადამიაროს ჟამიან. მე ბევრჯერ მსურდა მეთქვა რომ, სიცოცხლე ერთი წამია. ხოდა ეს ცივი სიშორე, დაღეს ისევ მათბობს შიგნიდან, ვცადე თუმც ვერ მოგიშორე! ფიქრებიანი, ფიქრიდან. შენინსურნელი თან დამდევს, ხოდა მეც დავალ ეული. დაგიკოცნიდი დალალებს, დალალებს დალალ-ხვეული.'
    },
    {
        poemId: 10,
        poemTitle: 'ვითარც თეთნულდი',
        poemItself: 'შენდა მიჯნურად გადავიქეც როგორც აროდეს, როგორც აროდეს მზის ამოსვლა დაგმშვენებია. ჩემი კალამი წამიერად რომ არ ხარობდეს, გარდაცვალების ბოლო ლექსი დამიწერია. ისევ ფიქრებმა! მე ფიქრებად ამიყოლია, და ისევ მბორგავს სუნთქვა შენი, ვითარც თეთნულდი. რომ შეძლო წასვლა, ამ გულიდან არამგონია, რადგანაც უკვე, მეტისმეტად გამიმეგზურდი. მტვერიან წიგნში შენახული ვარდი მაუწყებს, ნათითურები დიდიხნისწინ შალა დროებამ. დამჭკნარი ვარდი ვშიშობ, რომ მეტს ვეღარ გაუძლებს! და მტვრად ქცეული ქარს გაჰყვება ვით მოგონება. რა დამრჩენია? განაჩენი, განაჩენია! ჩემი გრძნობების შენ ხარ ისევ დღეს მობინადრე. შენმა თვალებმა სული ისე გადამირია, რომ ვერ შევძელი, და ვერცერთხელ ვერ ვუღალატე. ორნამენტი ხარ შენ ამ მკერდზე ამოტვიფრული, და შენზე ფიქრით იღვიძებენ ჩემი ფიქრები. სანამ ჩემად ხარ ვერ იქნება გამორიცხული, ისე თუარა ლექსად მაინც ჩემი იქნები. შენდა მიჯნურად გარდავიქეც როგორც აროდეს, როგორც აროდეს მზის ამოსვლა დაგმშვენებია. ჩემი კალამი წამიერად რომარ ხარობდეს, გარდაცვალების ბოლო ლექსი დამიწერია.'
    },
    {
        poemId: 11,
        poemTitle: 'ნოსტალგია',
        poemItself: 'შემიმოსა ნოსტალგიამ სული, გარინდების დამონებას ვდაობ. ვიყო ვინც ვარ მეტად არის რთული, განა სხვა ვარ? არა! უფრო ვსხვაობ. ასე ხდება მაშინ როცა გარსი, უთხელდება მივიწყებულ ყოფას. და იქნებ ხვალ არ მომეცეს შანსი, გავუმკლავდე ამდენ უვიცობას. ეხ ვაი რომ აღართანმდევს რიდი, ბევრად მეტი ძალისხმევა მმართებს. გამოვდექი ალბათ უფრო ფლიდი, და ბუნება სასჯელს შემიფარდებს. ვერ მოვუგე მანძილს მარათონი. თითქოს ჩემს ლეშს ყორღანებზე ფლეთენ, დაგმანული ვარ და, ახლა მგონი, ეს ლექსები უკვე აქეთ მეწერენ. შევუშინდი კვლავ ქარიან ავდარს, სიმარტოვეს ვეღარ იტევს გული. სარკმელს ვუშვებ ახლა მძიმე ფარდას, რადგანაც ვარ მძიმედ გაფატრული. შემიმოსა ნოსტალგიამ სული, გაცლას არა! ის მეტობას ლამობს. გააჩაღა ვით მანტიის წყლული, და ფესვები ჩემს სიღრმეში სახლობს.'
    },
    {
        poemId: 12,
        poemTitle: 'მოგესალმებით',
        poemItself: 'მოგესალმებით, ორი წუთი მსურს დამითმო-თ  უმორჩილესად, და პირადული აქ ნამდვილად არაფერია.  თუ არ მომისმენ-თ! მას მივიღებ გამოცდილებად, თუმცა პირიქით ბევრად კარგი განაჩენია. ახლა ფიქრები თქვენს გონებას მოედებიან, რომ მე ვინავარ? ან საერთოდ რად დაგაყოვნეთ. მერე თქვენს ფიქრებს ფიქრებიც კი მობეზრდებიან, და მე, რომ წავალ ეგ თვალები გამომაყოლეთ. თქვენი მზერისას! მატყვევებენ თქვენი ბაგენი, რომ შეფერილან ხის კენწეროს ალუბალივით. ვივარაუდე ვეღარ ვითვლი უკვე რამდენი, და მაინც მითად დარჩით ჩემში ამორძალივით. მოვა დრო როცა ნაოჭები გაგიხშირდებათ, და თქვენს სურნელასაც დრო წაიღებს სამარადჟამოდ. ყოველი წუთის გასვლა ძალზედ გაგიჭირდებათ. და თქვენ ინაღვლებთ! მე კი გეტყვით,რომ სულ ამაოდ. ამა ქვეყანას ხომ შეამკეთ თვენი ღიმილი, თქვენი მშვენებაც ხომ ნამდვილი სასწაულია. ალბათ მრავალჯერ განუცდია თქვენს გულს ტკივილი, და თქვენი სუნთქვა იმ ტკივილთა საზღაურია. გჯეროდეთ რომ თქვენ ალამაზებთ ამ შემოგარენს, და სამყაროსაც უთქვენობა არ შესძლებია!. როდესაც თოვლი შემოგადნობთ მაგ თმებში ფანტელს! წსორედ, რომ მაშინ თქვენი თმები ცას ეხებიან. თქვენი ნათებაც უჩვეულოდ ერწყმის ბუნებას, და ჩემი სტროფით თქვენს ზმანებას ვეამბორები. არამგონია,კვლავ გავუძლო თქვენზე ყურებას! თუმცა მგონია რომ თქვენს წარსულს ვემახსოვრები. მე ისევ გეტყვით პირადული არაფერია. მადლობა, რომ დრო ჩემთვის ასე უხვად დახარჯეთ, ოცნება თქვენზე დღეს სენივით გადამდებია. ეგ სენი ლექსად მომიძღვნია! და თქვენ განსაჯეთ.'
    },
    {
        poemId: 13,
        poemTitle: 'გაზაფხულის ფერები',
        poemItself: 'შეიფერებს გაზაფხულის ფერები, და იებიც მიწას ამოხეთქავენ. ხის კენწეროს ბუდეს მოვეფერები, როს ჩიტები ბარტყებს გამოჩეკავენ. მოედება მთის სურნელი გარემოს, იყვავილებს როცა ყოჩი-ვარდები. ისე ვსუნთქავ თითქოს სუნთქვა არმეყოს, და შენც გულო როგორ ფორიაქდები. აქ სიცოცხლე ახლა უფრო გახშირდა, და დარებიც უფრო მეტად ათფობენ. დედამიწამ შეიფოთლა ახლიდან, მალე ვაზებს მტევნები შეამკობენ. გაზაფხულო რომ ხარ ასე თავხედი, რომ, მოგისხა ვით ნაბადი ბუნებამ. მახსოვს შარშან ნაადრევად წახვედი, მე კი შენით, ვერ დამღალა ყურებამ. მიყვარს როცა ნავარდობენ წამები, ოთხ დროში ხარ მხოლოდ ერთი სხვაობა. შენს სიყვარულს მუდამ დავეზავები, რომ მუდმივად მას თან ახლდეს მზაობა. გაოცება სხვაგვარია ღამისპირს, და ეს მთვარეც ჩემთანერთად ათენებს. მე სიცოცხლე, მიღირს თუნდ იმ წამისთვის, რომ შევეხო ფრთებზე ციცინათელებს.'
    },
    {
        poemId: 14,
        poemTitle: 'აღმოცნებულან',
        poemItself: 'აღმოცენებულან შენში ჰარმონია, შენთვის დაქრიან თურმე ქარები ! ერთი შემოხედვა მთელი ამბორია, ცისფრად გიმშვენებენ გუგებს თვალები. ნუთუ ეგ თვალები მართლა ცისფერია? თუ თვით ზეცა არის შენი თვალთა ფერი, სახეს მოდებული ჭორფლის იერია, ჭორფლის იერია მეტი არაფერი. თუმცა სწორედაც რომ უბრალოებაა, რომელიც რომ შენში ასე ძვირად ფასობს, კაცობრიობისთვის სიამოვნებაა, გშობოს ასეთად და მერე შეგაფასოს. თმათა დალალები! ბაგე მოფენილი, ნაზი ალერსით რომ ნიავს ერევიან, შენ საოცრება ხარ ქვეყნად მოვლენილი, ქვეყნად სადაც დრონი კვლავ გამეფდებიან. ყვითლად ეხებიან ტუჩებს მზის სხივები, მეტად ტკბებიან და დაბლა ეშვებიან, ტკბილად გიგალობენ გიტარის სიმები! ნაზი აკორდებით გეალერსებიან. ხოლო ეს სტროფები, ურჩი სითამამით ლამაზ ოცნებებში შემოგეჭრებიან საზღვრებს შეგიმკობენ მთელი სილამაზით, სერაფიმებივით შემოგევლებიან.! აღმოცენებულან შენში ჰარმონია, შენთვის დაქრიან  თურმე ქარები, ერთი შემოხედვა მთელი ამბორია, ცისფრად გიმშვენებენ გუგებს თვალები.'
    },
    {
        poemId: 15,
        poemTitle: 'უსათაუროდ',
        poemItself: 'წილად ხვდა ყველას დროიდან, ეს ოდენ ბასრი ლახვარი, წასვლა დაგეგმილ ყოფიდან, შავეთებს გადასაყარი. ვშიშობ რომ გვიწყობს მასკარადს, ურჩია შეუბღალავი. მოვა და იტყვის გასაკვალს, აწ სხვათ არს გასაკვალავი. გვერდს ვერ აუვლის ამქვეყნად, ვინა ყოფილა შობილი. კაცი მას მაშინ დაერქვას, როს შევიყვაროს ძმობილი. წუთი სოფელი ასე შემოღამებად წვეული,  კაცია ადამიანი, ცხოვრებით გამორჩეული. უნდა ვარგოდეს მისია-ქ, სახელი დასატოვარი, არ სტეხდეს არცა ბღალავდეს უნდ იყოს შეუპოვარი, კარგი სახელის მოხვეჭა ძნელად არს მოსაპოვარი. წილად ეს ყველას როდი ხვდა მცირეა მოსაგონარი. უნდა იცოდეს ყოველმან, მარადისობის შენება, რადგან აქ ერთხელ მოველთ და მოვიმკოთ სულის მშვენება.'
    },
    {
        poemId: 16,
        poemTitle: 'პირველი პაემანისას',
        poemItself: 'მოდი დავლიოთ დავცალოთ ძღვენი, ძღვენი ულევი სიყვარულისა! ქართაგან სუნთქავს სურნელი შენი" ვით დროს მშვენება გაზაფხულისა. დაე ჩვენსავე გრძნობას თაყვანი! "ვცეთ" და ვაუწყოთ მერე სამყაროს, ვურწიოთ შვილებს პაპურ აკვანი, ზედ იავნანით დართულ საგამოს. იცი მე ვხედავ აზრთა სხვაობას, გამსჭვალულ ნდობის ,,უნდობლობაში" არმესმის რატომ ებრძვის ნაოსანს, ,,იღბალი" ჩათვლილ! უიღბლობაში. ვიცი რთულია გამიგო სტროფი, მე ხომ ჩემეულ ენაზე ვლაყბობ.. და ახლა ვფიქრობ ავიღო თოფი! შავეთს მივბარდე! სწორედ კი ამდროს... არ დააყოვნა გონების ბინდმა ქართაგან აღდგა სურნელი შენი!  შესუნთქვა მისი სიცოცხლეს ქმნის და  ეს სიცოცხლის სუნთქვაა ჩემი რატომ არცდილობ გიყვარდეს ისე! როგორც მე მიყვარს  ეს სიყვარული, ჩემში ხარ კვლავაც ვერ გაგასხვისე! კვლავაც შენთან მსურს მე სიარული. თუნდაც უშენოდ, ეულად მარტომ! განვლო სიცოცხლე ასე ნატრული, მერედა რისთვის! რისთვის და რატომ? გულში ხარ თვითონ "გული"  ჩაფლული.! და თუ ეს გული ფეთქვას განაგრძობს, მეც დავჯერდები სულის ოხებას! სადაც დარჩენას, ჩემი გაცლა სჯობს. ჟამს მივბარდები გარდაცვალებას. აღარსად ის კი არდააყოვნებს, რადგან ამგვარად არა სჩვევია მოვა და წავა როგორც ყვავ-ყორნებს.. დამჯდარი! ხიდან, გარდუფრენია. მხოლოდ იმედი მაცოცხლებს შენი! და დრო, წარსულის დაბრუნებისა, აწმყოში იმ დროს მორჩილად ველი, როგორც პირველი პაემანისას..'
    },
    {
        poemId: 17,
        poemTitle: 'მგოსანის მანდილოსანი',
        poemItself: 'თუ შეგიყვარდა! ერთხელ გიყვარს ისე ძლიერად, რომ დრონიც ვერას ვერ დააკლებს გამეფებული. კვლავ წითელ ვარდებს მოგართმევდი როგორც პირველად, და სტრიქონებსაც მოგიძღვნიდი დაბერებული. შენი მანდილი, მშვენიერო მამდილოსანო, ფასობს კიარა, უკვდავების სიმფონიაა. როგორც არუნდა, ამ სტროფებით გავიმგოსანო, ეს მხოლოდ ბედის დამცინავი ირონიაა. შენს არსებობას, შევადრიდი საოცარ მხარეს, სადაც სიცოცხლის, სიყვარულის, წყარო იღვრება. დაგიკოცნიდი სილამაზით გაჟღენთილ თვალებს, თვალებს რომლებიც სამუდამოდ ჩემში იქნება. ზეცას შევძრავდი! უწყვეტ ალერსს, ავიწყვიტავდი, თმებში გვირილებს ჩაგატნევდი უცხო ფერიანს. შემოდგომისას დილის სუსხში დავინისლებდი, და მერე სითბოდ შეგიხებდი მთაბარ-ველიანს. სურნელი შენი სამყაროში მიმოფანტული, ატკბობს, ამშვენებს, ვით ნიავი გაზაფხულისას. მინდა გაგხადო, მერე ლექსით გნახო ჩაცმული! მწვანე მდელოზე ჩამომჯდარი ნაკადულისას. დღემდე უწყვეტი, და ნაწყვეტი გარემოების, აფრქვევენ სითბოს ერთობლივად დანატენიანს, მე გარიჟრაჟზე მოვალ კვლავაც განმეორებით, სევდას დაგიჭკნობ, სამოსს გაგხდი ტანზე სევდიანს. გაგაოცებდი! შემეძლოს და გაგაგიჟებდი, ზღვის ჰორიზონტზე სხივთ მიქცემდი ადამიანად, მერე სხეულზე მაქმანებით გადაგიხვევდი, ყოველი სუნთქვით გიყვარებდი ამაყიანად. ხო! პოეტურად გადაგწერე მანდილოსანო, და პოეტური მოგანიჭე მელანქოლია, ეგ გიჟმაჟური გული უნდა დაგიმგოსანო ვპოვო ქარებში გაფანტული ალეგორია. არ დამინახავს და არც ერთხელ გამიგონია, რომ გარიჟრაჟზე მოფრთხიალდა თეთრი ყორანი, გიჟი აზრების მეტაფორამ მიყოლია, თან გააქროლა დანჯღრეული ჩემი ფორანი. სითავხედეა! სითავხედე მანდილოსანო, იდუმალებით შეგიმკია ღიმილი ტუჩზე, მე კვლავაც მინდა ეგ გული რომ დაგიმგოსანო და დაგელაშქრო ამ სტროფებით თავხედურ გულზე. სხეულს ელტვიან სახეცვლილი ნახშირბადები, იფეთქა უმალ და სხეულმაც სული დალია. გარდავიცვალე, მაგრამ ისევ დავიბადები, ჩემთვის სიცოცხლე შენთან ყოფნის ნაპერწკალია.! აღივსენ მთანიც, მზის სხივებსაც თავზარ დაეცა, ღიმილით ტუჩზე შემკობილო მანდილოსანო. და როგორც ადრე, ახლაც ისევ აზრი გამექცა, რომ ეგ ტუჩები გიჟმაჟურად დაგიმგოსანო.'
    },
    {
        poemId: 18,
        poemTitle: 'მიყვარს',
        poemItself: 'მიყვარს ერი, ბერი მიყვარს, მიყვარს ჩემი ბუნება, ქართლის დედა ნიკორწმინდა სულზე მელამუნება. მიყვარს მთები ბახმაროს და მიყვარს ხედის ყურება, სამშობლოზე ძვირფასი, ქვეყნად არმეგულება. მიყვარს ყველა გაზაფხულის შეწირული დარები, მიყვარს მცხეთა სვეტიცხოვლის, ტაძრად წმინდა კარები. მიყვარს გლეხის, ხელით ცხენზე დაჭედილი ნალები. მიყვარს ჩაის, კრეფის, ველზე, მოტრფიალე ქალები. მიყვარს როგორც, შვილი, დედას! აფხაზური მზაობა, მიყვარს სამხრეთ ოსეთი და, მისი სიოს გალობა. წინაპართა ხხსოვნით მიყვარს ახლანდელი თაობა, ზეგარდმო გადმონაშთების დროში მიყვარს სხვაობა. მიყვარს კერას შენუსხული ფიქრი ნარიყალაზე, არმაქვს მეტად ღირებული, სხვა რამ ამ ქვეყანაზე. მიყვარს მე ის ლოთიანიც ჩამომჯდარი ბაქანზე, ისიც როცა დიასახლისს ორთქლი ასდის ლანგარზე. მიყვარს მცველი, სამშობლოზე როცა მესაუბრება, მიყვარს გარეჯს ანგელოზნი როგორ ეფსალმუნება. მიყვარს ეგურს მოფრენილი შავი მელაღურები, მიყვარს ღამეს, დღის სინათლევ, როგორ ეხმაურები. მიყვარს მტკვარზე მოთევზავის თამბაქო და ქირქილი, მიყვარს ბაბუს გამართული ჩანჩქრისპირა წისქვილი. მიყვარს ძველი ლამფის შუქზე გალეული ფითილი, მიყვარს, მე შენ მიყვარხარო! სველ ქუჩებში ყვირილი. მიყვარს ყველა მჭერმეტყველი, ისტორია, მეფობა. მიყვარს ბრძოლა დიდგორის, და არაგველთა ერთობა. მიყვარს ცათა სასუფეველს გარდასული გმირები, მიყვარს როცა მათ საფლავებს ამშვენებენ იები. მიყვარს ენა, რწმენა, მიყვარს, მიყვარს ჩემი მამული, საქართველოს მიწა წყალზე, ფანდურთ სიმთა წკარუნი. მიყვარს ყველა გენიოსის არსი შემონახული, სიკეთისა მოქმედება მიყვარს უფრო ფარული. მიყვარს ერი, ბერი მიყვარს, მიყვარს ჩემი ბუნება, ქართლის დედა ნიკორწმინდა სულზე მელამუნება.'
    },
    {
        poemId: 19,
        poemTitle: 'ათასჯერ ხუთი',
        poemItself: 'როგორ მინდა მე ნეტავ იცოდე! რომ, შენ მოგიძღვნა ყოველი წუთი. შენ ჩემი გული როცა გიწოდე! შეცბა ათასჯერ, "ათასჯერ ხუთი" .სულ გაჩუქებდი ყოველ განთიადს, სულს გაჩუქებდი, სულერთს კიარა. ხანებს მხიარულს, ხანაც დარდიანს, ეს ოდენ დრო რომ გადაიარა. შენ იქნებოდი ჩემი საყდარი, ე მაგ თვალების ალეგორია. დედამიწაზე სხვა შესადარი, ვერ ვპოვე ვერსად ასე მგონია. სწორედ ამიტომ დაგეძებ ისევ, და შენი მიყვარს ლამაზი სული! და როგორც ადრე კვალავ გამოგიწვევ, რადგან მე არ მსურს ეს დასასრული!.'
    },
]




function Poems () {
    return (
        <div className="df align-center fl-wrap justify-evenly poems">
            {
                poemsData.map(poem => <Poem key={poem.poemId} poemTitle={poem.poemTitle} poem={poem.poemItself} />)
            }
        </div>
    );
}


export default Poems;