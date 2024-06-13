import { User } from '../models/user.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const addUser = asyncHandler(async (req, res) => {
  const {
    name,
    FileNo,
    EMINumber,
    FileStatus,
    FileIssue,
    LastDateAllowance,
    applicationNumber,
    transactionNumber,
    paymentDate,
    nationality,
    dob,
  } = req.body;

  // Validate required fields
  if (
    !name ||
    !FileNo ||
    !EMINumber ||
    !FileStatus ||
    !FileIssue ||
    !LastDateAllowance ||
    !applicationNumber ||
    !transactionNumber ||
    !paymentDate ||
    !nationality ||
    !dob
  ) {
    return res
      .status(400)
      .json({ status: false, data: null, res: 'Empty field is not allowed' });
  }

  // Check if user already exists
  const checkUser = await User.findOne({ FileNo, EMINumber });
  console.log(checkUser);

  // If user exists, return conflict status
  if (checkUser) {
    return res
      .status(409)
      .json({ status: 'false', data: null, res: 'User already registered' });
  }

  // Create a new user
  const response = await User.create(req.body);

  // Return the created user data
  res.status(201).json({ status: true, data: response });
});

const searchUser = asyncHandler(async (req, res) => {
  const { name, FileNo, EMINumber, nationality, dob } = req.body;

  // Build the query object dynamically
  let query = {};
  if (name) query.name = name;
  if (FileNo) query.FileNo = FileNo;
  if (EMINumber) query.EMINumber = EMINumber;
  if (nationality) query.nationality = nationality;
  if (dob) query.dob = dob;

  // Search users based on the constructed query
  const users = await User.find(query);
  console.log();
  if (users.length <= 0) {
    res.status(200).json({ status: false, data: null });
    return;
  }

  // Return the found users
  res.status(200).json({ status: true, user: users[0] });
});

export { addUser, searchUser };
