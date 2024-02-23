import Tour from '../models/Tour.js'

// create new tour
export const createTour = async (req,res)=>{
  const newTour = new Tour(req.body);
  try {
      const savedTour = await newTour.save();
      res
        .status(200)
        .json({
          success:true, 
          meassage:"Successfully created", 
          data:savedTour,
      });
  } catch (err) {
    res
      .status(500)
      .json({success:false, meassage:'Failed to create. Try again'});
  }
};

// update tour
export const updateTour = async(req, res)=>{
  try{
  }catch (err){}
};

// delete tour
export const deleteTour = async(req, res)=>{
  try{
  }catch (err){}
};

// getSingle tour
export const getSingleTour = async(req, res)=>{
  try{
  }catch (err){}
};

// getAll tour
export const getAllTour = async(req, res)=>{
  try{
  }catch (err){}
};
