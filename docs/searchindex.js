Search.setIndex({docnames:["aggregate/core","aggregate/cut","aggregate/display","aggregate/length","aggregate/people","annotate/cielab","annotate/clutter","annotate/core","annotate/diff","annotate/embed","annotate/face","annotate/hofm","annotate/meta","annotate/obj","annotate/opticalflow","annotate/png","cli","demo","dvt","index","install","pipeline/utils","pipeline/video","tutorial/annotators","tutorial/cli","tutorial/cuts","tutorial/faces","tutorial/index","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["aggregate/core.rst","aggregate/cut.rst","aggregate/display.rst","aggregate/length.rst","aggregate/people.rst","annotate/cielab.rst","annotate/clutter.rst","annotate/core.rst","annotate/diff.rst","annotate/embed.rst","annotate/face.rst","annotate/hofm.rst","annotate/meta.rst","annotate/obj.rst","annotate/opticalflow.rst","annotate/png.rst","cli.rst","demo.rst","dvt.rst","index.rst","install.rst","pipeline/utils.rst","pipeline/video.rst","tutorial/annotators.rst","tutorial/cli.rst","tutorial/cuts.rst","tutorial/faces.rst","tutorial/index.rst","utils.rst"],objects:{"dvt.aggregate":{core:[0,0,0,"-"],cut:[1,0,0,"-"],display:[2,0,0,"-"],length:[3,0,0,"-"],people:[4,0,0,"-"]},"dvt.aggregate.core":{Aggregator:[0,1,1,""]},"dvt.aggregate.core.Aggregator":{aggregate:[0,2,1,""],name:[0,3,1,""]},"dvt.aggregate.cut":{CutAggregator:[1,1,1,""]},"dvt.aggregate.cut.CutAggregator":{aggregate:[1,2,1,""],cut_vals:[1,3,1,""],ignore_vals:[1,3,1,""],min_len:[1,3,1,""]},"dvt.aggregate.display":{DisplayAggregator:[2,1,1,""]},"dvt.aggregate.display.DisplayAggregator":{aggregate:[2,2,1,""],min_face_score:[2,3,1,""],min_obj_score:[2,3,1,""],shot_names:[2,3,1,""],shot_sizes:[2,3,1,""]},"dvt.aggregate.length":{ShotLengthAggregator:[3,1,1,""]},"dvt.aggregate.length.ShotLengthAggregator":{aggregate:[3,2,1,""],min_face_score:[3,3,1,""],min_obj_score:[3,3,1,""],shot_names:[3,3,1,""],shot_sizes:[3,3,1,""]},"dvt.aggregate.people":{PeopleAggregator:[4,1,1,""]},"dvt.aggregate.people.PeopleAggregator":{aggregate:[4,2,1,""],face_names:[4,3,1,""],fprint:[4,3,1,""]},"dvt.annotate":{cielab:[5,0,0,"-"],clutter:[6,0,0,"-"],core:[7,0,0,"-"],diff:[8,0,0,"-"],embed:[9,0,0,"-"],face:[10,0,0,"-"],hofm:[11,0,0,"-"],meta:[12,0,0,"-"],obj:[13,0,0,"-"],opticalflow:[14,0,0,"-"],png:[15,0,0,"-"]},"dvt.annotate.cielab":{CIElabAnnotator:[5,1,1,""]},"dvt.annotate.cielab.CIElabAnnotator":{annotate:[5,2,1,""],frames:[5,3,1,""],freq:[5,3,1,""],name:[5,3,1,""],num_buckets:[5,3,1,""],num_dominant:[5,3,1,""]},"dvt.annotate.clutter":{ClutterAnnotator:[6,1,1,""]},"dvt.annotate.clutter.ClutterAnnotator":{annotate:[6,2,1,""],frames:[6,3,1,""],freq:[6,3,1,""],name:[6,3,1,""]},"dvt.annotate.core":{FrameAnnotator:[7,1,1,""],FrameBatch:[7,1,1,""],FrameInput:[7,1,1,""],FrameProcessor:[7,1,1,""],ImageInput:[7,1,1,""]},"dvt.annotate.core.FrameAnnotator":{annotate:[7,2,1,""],cache:[7,3,1,""],clear:[7,2,1,""],name:[7,3,1,""],start:[7,2,1,""]},"dvt.annotate.core.FrameBatch":{bnum:[7,3,1,""],bsize:[7,3,1,""],continue_read:[7,3,1,""],end:[7,3,1,""],fnames:[7,3,1,""],get_batch:[7,2,1,""],get_frame_names:[7,2,1,""],get_frames:[7,2,1,""],img:[7,3,1,""],start:[7,3,1,""],vname:[7,3,1,""]},"dvt.annotate.core.FrameInput":{bsize:[7,3,1,""],continue_read:[7,3,1,""],end:[7,3,1,""],fcount:[7,3,1,""],meta:[7,3,1,""],next_batch:[7,2,1,""],start:[7,3,1,""],vname:[7,3,1,""]},"dvt.annotate.core.FrameProcessor":{clear:[7,2,1,""],collect:[7,2,1,""],collect_all:[7,2,1,""],load_annotator:[7,2,1,""],output:[7,3,1,""],pipeline:[7,3,1,""],process:[7,2,1,""]},"dvt.annotate.core.ImageInput":{bsize:[7,3,1,""],continue_read:[7,3,1,""],fcount:[7,3,1,""],meta:[7,3,1,""],next_batch:[7,2,1,""],vname:[7,3,1,""]},"dvt.annotate.diff":{DiffAnnotator:[8,1,1,""]},"dvt.annotate.diff.DiffAnnotator":{annotate:[8,2,1,""],bins:[8,3,1,""],name:[8,3,1,""],quantiles:[8,3,1,""],size:[8,3,1,""]},"dvt.annotate.embed":{EmbedAnnotator:[9,1,1,""],EmbedFrameKeras:[9,1,1,""],EmbedFrameKerasResNet50:[9,1,1,""]},"dvt.annotate.embed.EmbedAnnotator":{annotate:[9,2,1,""],embedding:[9,3,1,""],frames:[9,3,1,""],freq:[9,3,1,""],name:[9,3,1,""]},"dvt.annotate.embed.EmbedFrameKeras":{embed:[9,2,1,""],model:[9,3,1,""],outlayer:[9,3,1,""],preprocess_input:[9,3,1,""]},"dvt.annotate.embed.EmbedFrameKerasResNet50":{model:[9,3,1,""],preprocess_input:[9,3,1,""]},"dvt.annotate.face":{FaceAnnotator:[10,1,1,""],FaceDetectDlib:[10,1,1,""],FaceDetectMtcnn:[10,1,1,""],FaceEmbedDlib:[10,1,1,""],FaceEmbedVgg2:[10,1,1,""]},"dvt.annotate.face.FaceAnnotator":{annotate:[10,2,1,""],detector:[10,3,1,""],embedding:[10,3,1,""],frames:[10,3,1,""],freq:[10,3,1,""],name:[10,3,1,""]},"dvt.annotate.face.FaceDetectDlib":{cutoff:[10,3,1,""],detect:[10,2,1,""]},"dvt.annotate.face.FaceDetectMtcnn":{cutoff:[10,3,1,""],detect:[10,2,1,""]},"dvt.annotate.face.FaceEmbedDlib":{embed:[10,2,1,""]},"dvt.annotate.face.FaceEmbedVgg2":{embed:[10,2,1,""]},"dvt.annotate.hofm":{HOFMAnnotator:[11,1,1,""]},"dvt.annotate.hofm.HOFMAnnotator":{ang_buckets:[11,3,1,""],annotate:[11,2,1,""],blocks:[11,3,1,""],frames:[11,3,1,""],freq:[11,3,1,""],mag_buckets:[11,3,1,""],name:[11,3,1,""]},"dvt.annotate.meta":{MetaAnnotator:[12,1,1,""]},"dvt.annotate.meta.MetaAnnotator":{annotate:[12,2,1,""],meta:[12,3,1,""],name:[12,3,1,""],pass_flag:[12,3,1,""],start:[12,2,1,""]},"dvt.annotate.obj":{ObjectAnnotator:[13,1,1,""],ObjectDetectRetinaNet:[13,1,1,""]},"dvt.annotate.obj.ObjectAnnotator":{annotate:[13,2,1,""],detector:[13,3,1,""],frames:[13,3,1,""],freq:[13,3,1,""],name:[13,3,1,""]},"dvt.annotate.obj.ObjectDetectRetinaNet":{cutoff:[13,3,1,""],detect:[13,2,1,""]},"dvt.annotate.opticalflow":{OpticalFlowAnnotator:[14,1,1,""]},"dvt.annotate.opticalflow.OpticalFlowAnnotator":{annotate:[14,2,1,""],frames:[14,3,1,""],freq:[14,3,1,""],name:[14,3,1,""],output_dir:[14,3,1,""],raw:[14,3,1,""]},"dvt.annotate.png":{PngAnnotator:[15,1,1,""]},"dvt.annotate.png.PngAnnotator":{annotate:[15,2,1,""],frames:[15,3,1,""],freq:[15,3,1,""],name:[15,3,1,""],output_dir:[15,3,1,""],size:[15,3,1,""]},"dvt.cli":{run_cli:[16,4,1,""]},"dvt.pipeline":{utils:[21,0,0,"-"],video:[22,0,0,"-"]},"dvt.pipeline.video":{VideoPipeline:[22,1,1,""]},"dvt.pipeline.video.VideoPipeline":{cut_min_length:[22,3,1,""],diff_co:[22,3,1,""],doutput:[22,3,1,""],finput:[22,3,1,""],make_breaks:[22,2,1,""],run:[22,2,1,""]},"dvt.utils":{DictFrame:[28,1,1,""],get_batch:[28,4,1,""],pd_to_dict_frame:[28,4,1,""],setup_tensorflow:[28,4,1,""],stack_dict_frames:[28,4,1,""],sub_image:[28,4,1,""]},"dvt.utils.DictFrame":{data:[28,3,1,""],shape:[28,3,1,""],todf:[28,2,1,""],verify:[28,2,1,""]},dvt:{cli:[16,0,0,"-"],utils:[28,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"40th":23,"break":[8,23,28],"case":7,"class":[1,2,3,4,5,6,8,9,10,11,12,13,14,15,18,22,28],"default":[1,2,3,4,5,7,9,10,11,13,14,15,17,22,23,28],"final":[7,9,10,13],"float":[2,3,7,8,10,13,28],"function":[1,2,3,4,7,9,12,16,19],"import":[13,23,25,26],"int":[1,5,6,7,8,9,10,11,13,14,15,22,28],"long":[3,23],"new":[7,17,22,28],"return":[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,23,28],"throw":28,"true":28,"while":[0,12],And:17,For:[5,6,9,10,11,13,14,15,17],MLS:3,Not:12,The:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,20,23,24,25,26,28],Then:[1,3,4,7,8,9,10,12,13],There:15,These:[5,7,8,12,28],Use:7,Used:7,Useful:[7,28],Uses:[1,3,4],Will:[8,15],abl:9,about:[1,3,7,12,19,23],abov:7,access:[9,23],accomplish:7,accord:15,account:8,accuraci:10,across:[8,19,28],actual:3,add:[7,23],added:7,adding:7,addit:[1,7,13,17,20,28],addition:8,advanc:19,after:[20,22],aggreg:[0,8,19,23,25,26],ahead:7,algorithm:[6,7,10,11,12,13,14,19,23],all:[7,8,10,13,23,28],allow:[1,10,16,19,28],along:[4,10],alreadi:12,also:[3,7,9,10,13,28],alwai:[7,12],ambient:9,anaconda:20,analysi:[13,19,23],analyz:19,anam:7,ang_bucket:11,angl:11,ani:[2,3,7,8,9,13,15,19,23,28],anno:4,annot:[0,1,2,3,4,7,11,17,22,27,28],anoth:[1,4],apart:10,append:7,appli:[9,10,12,13,16,19],approach:17,architectur:[17,19],argument:23,around:10,arrai:[4,5,6,7,9,10,11,13,14,15,28],art:[10,19],assert:28,assist:8,associ:[4,7],assum:[1,3,4,8,9,10,12,13,15,17,22,23,24,25,26],attach:23,attempt:28,attribut:[7,9,28],audio:0,automat:[9,20],avail:[7,19,22,23,24],averag:[8,23],avg_valu:[8,23],avoid:7,balanc:10,base:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,22,28],baselin:4,basic:[7,8],basicconfig:[23,25,26],batch:[1,3,4,5,6,7,8,9,10,11,12,13,14,15,23,28],batch_num:28,becaus:[7,9],been:[7,12,20],befor:7,behavior:28,best:28,between:[1,7,8,12,23],bin:8,black:7,block:11,bnum:7,bool:[7,12,14,28],both:[1,8,13],bottom:[10,13,23,28],bound:[2,10,11,13,28],boundari:8,box:[2,10,13,28],breviti:8,bright:[8,23],browser:22,bsize:[7,23],bucket:[5,11],build:[16,22,23],built:[9,10,20,23],cach:7,cagg:23,calcul:6,call:[7,10,12,13,16,23,28],can:[0,3,7,8,9,10,12,13,17,19,20,23,28],cascad:10,cast:23,caus:1,caution:16,chang:3,channel:[5,9],charact:4,check:28,cielab:[6,18],cielabannot:5,clear:7,cli:16,clip:[4,17,22,23,24,25,26],close:[1,3,10],clutter:18,clutterannot:6,cnn:[10,12],code:[7,9,19,22],collabor:19,collect:[1,3,4,7,8,9,10,12,13,19,28],collect_al:[1,3,4,7,23],color:[5,14],colorspac:5,colour:5,column:[3,4,9,10,23,28],com:[23,24,25,26],combin:[7,12,28],command:[17,18,23,25,26],common:[10,13],compar:[4,8],comparison:8,complet:17,complex:6,comprehens:17,comput:[2,3,5,6,8,9,11,14,19,23],concret:9,confid:[2,3,4,10,13,23],configur:23,conform:28,consid:1,consist:[7,28],construct:[1,3,4,5,7,23,28],constructor:28,contact:19,contain:[1,3,4,5,6,7,8,9,10,11,12,13,14,17,19,22,28],context:8,continue_read:7,control:9,convert:[23,28],convolut:9,coordin:[10,28],core:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,23,25,26],corpora:19,corpu:19,correspond:[4,9,28],couch:13,count:8,counter:7,cpu:28,creat:[2,7,15,22,23,28],csv:[23,28],cultur:19,current:[7,10,22,28],custom:[10,23],cut:[2,3,7,18,22,23,25,26],cut_min_length:22,cut_val:[1,23],cutaggreg:[1,23,25,26],cutoff:[1,10,13,22],cycl:7,dark:[1,8],data:[0,2,7,8,9,10,12,13,15,17,21,22,23,24,25,26,28],datafram:23,dataset:[7,10,28],debug:[23,25,26],dens:[11,18,22],describ:[5,6,11,14,22,28],descript:[0,7],design:[10,19,28],detail:17,detect:[1,2,3,4,8,10,12,13,22,23,25],detector:[3,4,7,10,13,23],determin:[3,22],dict:[0,1,2,3,4,7,12,28],dictfram:[0,1,2,3,4,7,23,28],dictionari:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,23,28],dictlist:[10,13],diff:[1,8,23,25,26],diff_co:22,diffannot:[1,8,23,25,26],differ:[1,10,18,22],digit:19,dimens:[9,11,14,28],dimension:[7,9,10,12,13,28],direct:13,directli:[12,16,28],directori:[15,17,22,23,24,25,26],discoveri:19,disk:7,displai:[8,9,10,12,13,17,18],displayaggreg:2,dist:4,distanc:4,distant:[7,17,20,23,24,25,26,28],distinct:10,distribut:[5,20],divid:[9,11],divis:5,dlib:[10,12,23],dname:22,doe:[7,15,23],doi:11,doing:10,domin:5,doutput:22,down:[8,28],downstream:23,draw:2,dure:1,dvt:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,22,23,24,25,26,28],each:[3,4,5,7,8,9,10,11,13,23],eas:[10,12,23],easi:9,edu:19,effect:[15,23],either:28,element:[7,12,28],emb:[4,10,12,13,18],embed:[3,4,5,6,9,10,11,13,14],embedannot:9,embedframekera:9,embedframekerasresnet50:9,empti:[7,15,23],end:7,endow:19,enforc:0,entir:[2,3,7,12,23],entri:[1,3,4,7],entropi:6,environ:[23,24,25,26],equal:[0,7,28],equival:28,era:19,error:28,estim:[1,3],everi:[4,5,6,9,10,11,12,13,14,15,23,28],evok:16,exampl:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,17,19,22,28],excit:23,exist:[7,15],expand:28,expens:7,explain:17,extend:[0,7,9],extens:[23,28],extern:16,extract:[5,6,7,11,14,15,17,19,22,28],face:[2,3,4,12,13,18,25,26],face_nam:4,faceannot:[3,4,10,12,23,25,26],facedetectdlib:[3,4,10,23,25,26],facedetectmtcnn:10,faceembeddlib:10,faceembedvgg2:[4,10,23,25,26],facilit:19,fact:23,fade:1,fals:[7,14],farneback:[11,14],farther:10,fcount:7,fct:28,featur:11,few:22,fewer:22,field:14,file:[2,7,15,16,17,22,23,24,25,26,28],fin:7,find:[8,19,23],finish:17,finput:[22,23],first:[1,3,4,7,8,9,10,12,28],five:3,flag:[7,28],flow:18,fname:7,follow:[1,3,4,7,8,9,10,12,13,15,17,19,20,22,23,24,25,26],format:[9,15],forward:[7,10],found:[10,13,23],four:[7,9,10,13,23],fpobj:23,fprint:4,fps:[12,23],frame:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,17,18,22,23,28],frame_end:[1,23],frame_start:[1,23],frameannot:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],framebatch:[5,6,7,8,9,10,11,12,13,14,15],frameinput:[1,3,4,7,8,9,10,12,13,15,23,25,26,28],frameprocess:28,frameprocessor:[1,3,4,7,8,9,10,12,13,15,23,25,26],freq:[3,4,5,6,9,10,11,13,14,15,22,23],frequenc:[5,6,9,10,11,13,14,15,22],frequent:9,from:[0,1,2,3,4,6,7,8,9,10,12,13,15,16,17,19,22,23,25,26,28],further:[0,8,17,19],gener:[9,10,12,13,18,28],get:7,get_batch:[7,28],get_fram:7,get_frame_nam:7,github:[19,23,24,25,26],give:[1,3,4,5,8,9,10,12,17,22,28],given:[2,3,7,8,9,15,28],gpu:[7,23,28],grab:12,grant:19,gunnar:[11,14],h40:[1,8,23],half:7,hand:19,handl:9,has:[7,12,14,20,28],have:[1,3,4,7,8,9,10,12,13,15,17,19,20,22,23,24,25,26,28],head:[8,23],height:[7,12,15,23],here:[0,1,2,3,4,8,13,17,23,28],high:10,higher:[9,19,22],histogram:[1,5,8,18],hofm:11,hofmannot:11,hold:7,homepag:19,how:[5,6,8,9,10,11,13,14,15,17,22,23,25,26],hsv:8,http:[11,17,22,23,24,25,26],hue:8,human:19,ident:4,identifi:[4,10,26],ignor:[1,5,6,9,10,11,13,14,15],ignore_v:1,iii:[7,23],ilist:28,imag:[2,5,6,7,8,10,11,12,13,14,15,18,19,22,28],imageinput:7,img:[7,9,10,13,28],implement:0,includ:[1,2,3,7,8,10,13,22],inclus:12,increas:[2,3],index:23,indic:[1,7,12,23],individu:[10,15,23,28],info:[12,23],inform:[1,3,4,7,12,13,15,17,19,23,28],initi:7,input:[1,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,23,25,26,28],input_dir:2,input_obj:[7,28],input_path:7,insert:13,inspir:28,instal:[17,19,23,24,25,26],instead:23,instruct:19,integ:[5,6,8,9,10,11,13,14,15,22,28],intend:16,interact:22,interest:[7,19],interfac:[17,18,19],interg:22,intern:[7,9],issu:19,item:[7,10,13,28],its:[6,15,23],ival:[7,12],journal:6,json:22,just:[7,8,22],keep:[17,28],kei:[1,3,4,7,10,13,23,28],kera:9,kind:8,knowledg:7,lab:19,larg:[7,19],last:3,latter:14,layer:9,ldframe:[0,1,2,3,4],learn:9,least:23,left:[4,10,13,19,23,28],len:11,length:[1,2,5,7,11,17,18,22,28],level:[1,3,4,17,19,22,23,25,26],light:5,limit:7,line:[12,17,18],link:19,lisa:6,list:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,28],load:[7,23,25,26],load_annot:[1,3,4,7,8,9,10,12,13,15,23],local:[1,2,15,17],locat:[10,13,14,15],log:[7,17,23,25,26],logic:0,longest:[2,3],look:[7,23],low:19,lower:17,ltilton:19,machin:[15,22],mag_bucket:11,magnitud:11,mai:[7,17],main:[7,23],make:8,make_break:22,mani:[7,8,11],manual:28,master:[23,24,25,26],match:[4,9],materi:17,matric:28,max_batch:[1,3,4,7,8,9,10,12,13,15,23],maximum:[5,7],mcu:3,measur:6,media:16,median:8,medium:3,member:23,memori:7,meta:[3,7,12,23,25,26],metaannot:[3,12,23,25,26],metadata:[7,17,18,19,22],method:[0,7,10,13,15,23],metric:9,middl:3,min_face_scor:[2,3],min_len:1,min_obj_scor:[2,3],mind:17,minim:9,minimum:[1,2,3,22],minut:17,model:[0,7,9,10,12],modifi:[7,28],modul:[7,9,10,12,13,15,23],more:[7,16,17,19,22],most:[5,7,9,10,28],mostli:28,motion:[11,14],move:[7,13,19],mp4:[1,3,4,7,8,9,10,12,13,15,17,22,23,24,25,26],much:[8,22],multi:10,must:[1,3,4,28],mutipl:12,nakano:6,name:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,22],nation:19,nativ:28,navig:22,ncol:28,nearest:4,need:[1,3,4,7],neither:28,network:[9,19],neural:9,next:[4,7,8],next_batch:7,non:10,none:[1,2,3,5,6,7,8,9,10,11,12,13,14,15,22,23,28],nor:28,normal:8,note:[4,7,9,28],noth:7,notic:[9,23],now:[15,23],nrow:28,num_bucket:5,num_domin:5,num_fac:3,num_peopl:3,number:[4,5,7,9,23,28],numpi:[4,5,6,7,9,10,11,13,14,15,28],obj:[1,3,4,13,23],object:[0,2,3,7,9,10,12,18,22,23,28],objectannot:[3,13],objectdetectretinanet:[3,13],obscur:[3,23],observ:28,occur:1,off:[1,2,3],often:[5,6,7,9,10,11,13,14,15,17],onc:[7,9,17],one:[3,4,7,8,9,10,12,13,16,28],onli:[7,8,10,12,14,15,23,28],open:[17,19],opencv:[11,14],optic:[18,22],opticalflow:14,opticalflowannot:14,option:[1,2,3,5,6,9,10,11,13,14,15,17,24,28],order:[7,17,23,28],ordereddict:[7,28],org:11,organ:12,orient:11,origin:[2,3,28],other:[5,6,7,9,10,11,13,14,15,17],otherwis:[2,3,12],outlay:9,output:[0,1,2,7,8,9,10,12,13,14,15,17,22,23,28],output_dir:[2,14,15,23],output_shap:28,oven:3,over:[1,2,3,4,7,8,9,10,12,13,15,22,23],overal:8,overlai:2,overrid:7,own:17,packag:[19,20],pad:7,page:19,panda:[8,9,10,12,13,23,28],paradigm:10,paramet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,22,28],pars:22,part:4,particular:7,particularli:10,pass:[7,10,12],pass_flag:12,path:22,pattern:19,pd_to_dict_fram:28,pdf:28,penultim:9,peopl:[3,10,13,18,26],peopleaggreg:4,per:[3,4,6,9],percentag:28,percentil:[8,23],perform:[5,6,7,9,10,11,13,14],person:[3,4,10,13],pip:20,pipelin:[0,7,12,16,17,23],pixel:[1,7,8,28],pleas:[17,19],plot:28,png:[2,18,25,26],pngannot:[15,23,25,26],point:7,pointer:7,popular:9,posit:22,possibl:[7,9,28],pre:[9,16,23],predefin:[4,22],predict:[4,9],preprocess:9,preprocess_input:9,preserv:15,process:[1,3,4,5,6,7,8,9,10,11,12,13,14,15,17,22,23],processor:[0,23],produc:[9,14,22,28],program:16,progress:17,project:[10,19],proport:[2,3],propos:6,provid:[3,4,7,8,9,13,17,28],purpos:[1,23],put:[7,8],pypi:[19,20],python3:[17,22],python:[19,20,23,24,25,26],q40:[1,8,23],quantil:[1,8,23],question:19,quick:17,quickli:[16,19],ran:9,rather:[22,28],raw:[7,14,23,24,25,26],read:[7,28],reconvert:28,recov:7,recreat:28,region:7,relat:8,remov:7,repeat:17,repect:2,repositori:19,repres:[10,11,13],represent:[11,14],request:8,requir:[2,7,9,10,20],reset:7,resiz:[9,28],resnet50:9,resnet:9,resolut:28,restrict:23,result:[7,8,10,11],retinanet:13,rgb:[7,9],richmond:19,right:[10,13,23,28],root:[12,23],rosenholtz:6,row:[3,4,9,10,12,28],run:[2,7,9,10,12,13,16,17,19,20,22,23,24,25,26,28],run_cli:16,ruth:6,same:[2,3,7,10,14,17,28],sampl:[1,3,4,8,9,10,12,13,15,22],satur:8,save:[2,15,23,28],scale:28,scene:8,score:[1,2,3,10,13],search:19,second:[8,10,28],see:[0,3,9,17,19,23],select:[22,28],semant:19,sent:28,sequenc:7,server:[17,22],set:[1,2,3,4,5,6,7,8,9,10,11,13,14,15,22,23,28],setup:28,setup_tensorflow:28,sever:[17,23],shape:[5,7,9,28],shot:[2,3,4,8],shot_length:3,shot_nam:[2,3],shot_siz:[2,3],shotlengthaggreg:3,should:[0,2,3,4,5,6,7,9,10,11,13,14,15,17,20,23,28],show:[1,2,3,4,8,9,10,12,13,15,17,22,23,24,25,26],shown:[7,8],sibgrapi:11,side:[8,15,19,23],similar:9,simpl:28,simultan:28,singl:[6,10,12,13,28],sit:4,sitcom:19,six:23,size:[2,3,7,8,9,15,28],sla:3,small:[8,10,23],some:[7,9,15,17,24],someth:[5,6,9,10,11,13,14,15],sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,22,25,26,28],space:[7,8,9,10,12],spatial:[11,14],special:28,specif:[0,7,10,13],specifi:15,speed:10,squar:8,stack:28,stack_dict_fram:[7,28],start:[2,3,7,12,17,22,23,25,26],state:[7,10,19],step:10,still:[13,15,19],store:[10,13,14,15,23,28],str:[0,7,15,22],strictli:0,string:[14,28],strip:28,structur:[7,28],style:19,sub:7,sub_imag:28,subband:6,subclass:[0,7],subimag:28,subsequ:[7,8,11,14],subset:[9,28],success:[1,23],suggest:20,suitabl:10,summari:8,supervis:9,suppli:[10,12,13,15,28],support:19,tabl:12,take:[1,2,3,4,7,8,10,13,17,23,28],tarnold2:19,task:[0,9,10,13,23],tensorflow:28,termin:17,test:[10,20,23,24,25,26,28],than:[5,6,9,10,11,13,14,15,22,28],thei:[8,12,15],them:10,themselv:10,theori:19,thi:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,23,24,25,26,28],though:17,three:[5,9,10,13,28],through:[7,10,20,23],tightest:[2,3],time:[7,17,23],todf:[1,3,4,8,9,10,12,13,23,28],togeth:[7,10,28],too:[1,3],tool:16,toolkit:[7,16,17,20,23,24,25,26,28],top:[4,10,13,23,28],total:[7,13],train:9,tri:4,troubl:19,trough:19,tune:9,tupl:[5,15,28],turn:[7,23,25,26],tutori:[17,24],twice:7,two:[1,3,4,8,9,10,11,12,13,14,15,19,23],type:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,22,23,28],typic:1,unimpl:28,unless:7,untru:28,usag:[1,3,4,8,9,10,12,13,15,22],use:[2,3,9,10,17,23],use_arrai:28,used:[1,3,4,7,8,9,10,12,14,23,28],useful:[7,8,9,15,23,28],user:[7,16,19,28],uses:1,using:[3,4,7,9,10,11,13,14,17,19,20,23,24,25,26,28],valid:28,valu:[0,1,6,7,8,10,13,22,23,28],variabl:1,vector:[4,9,10],verbos:7,veri:[9,23],verifi:28,version:28,vertic:[2,3],vggface2:[10,12],video:[1,4,5,6,7,8,9,10,11,12,13,14,17,18,19,23,24,25,26],videometaannot:12,videopipelin:22,view:[7,17,20,23,24,25,26,28],vision:[6,19],visual:[6,17,19,22],vname:[7,12,23],want:23,web:22,websit:22,well:[10,23],what:[15,22,23,28],when:[7,9,10,23,24,28],whenev:[7,23],where:[1,7,10,13,15],whether:[7,12],which:[1,3,4,7,10,11,13,28],width:[7,12,15,23],wise:12,within:[4,7],word:9,work:[7,12,17,18,21,23,24,25,26],wrap:28,wrapper:13,yet:15,you:[3,4,7,17,19,20,22,23,24,25,26],your:[4,17,22,23,24,25,26],yuanzhen:6,zero:[2,3,7,10,13]},titles:["Generic Classes","Cut Aggregators","Display Aggregators","Length Aggregators","People Aggregators","CieLAB Annotators","Clutter Annotators","Generic Classes","Frame Difference Annotations","Embed Image Annotations","Face Annotations","Histograms of Optical Flow","Metadata Annotations","Object Annotations","Dense Optical Flow Annotations","Png Annotations","Command Line Interface","Minimal Demo","Distant Viewing Toolkit (DVT): API Docs","The Distant Viewing Toolkit (DVT)","Installation","Utility Pipeline Functions","Pipeline for Working with Video Inputs","Annotator Tutorial","Command Line Interface","Annotator Tutorial","Annotator Tutorial","Tutorials","Utility Functions"],titleterms:{"class":[0,7],"function":[18,21,28],The:19,aggreg:[1,2,3,4,18],annot:[5,6,8,9,10,12,13,14,15,18,23,25,26],api:18,cielab:5,clutter:6,command:[16,24],cut:1,demo:17,dens:14,differ:[8,23],displai:2,distant:[18,19],doc:18,dvt:[18,19],emb:9,face:[10,23],flow:[11,14],frame:8,gener:[0,7],histogram:11,imag:9,input:22,instal:20,interfac:[16,24],length:3,line:[16,24],metadata:[12,23],minim:17,object:13,optic:[11,14],peopl:4,pipelin:[18,21,22],png:[15,23],toolkit:[18,19],tutori:[23,25,26,27],util:[18,21,28],video:22,view:[18,19],work:22}})