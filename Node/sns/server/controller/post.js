const Post = require('../schemas/posts');
const Hashtag =require('../schemas/hashtags');


exports.afterUploadImage = (req, res)=> {  // path 정보 얻은 후 db 저장할때 path 정보 같이 req
    res.json({url:`/img/${req.file.filename}`}) 
} 

exports.uploadPost = async (req,res,next) =>{
    try{
        const post =await Post.create({
            content : req.body.content,
            img: req.body.url,
            user : req.user._id
        });
        const hashtags = req.body.content.match(/#[^\s#]*/g);
        if (hashtags) {
            const result = await Promise.all(
                hashtags.map(async (tag)=>{
                    const title = tag.slice(1).toLowerCase();
                    let hash = await Hashtag.findOne({title})
                    if (!hash) {
                        hash = await Hashtag.create({title})
                    }
                    return hash
                })
            );
            post.hashtags = result.map((hash)=> hash._id)
            await post.save();
        }
        res.redirect('/')
    } catch(err){
        console.error(err)
        next(err)
    }
}

