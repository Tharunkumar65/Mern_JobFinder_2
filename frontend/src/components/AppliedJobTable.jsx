import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store=>store.job);
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {
  // Check if there are no applied jobs
  allAppliedJobs.length <= 0 ? (
    <span>You haven't applied for any job yet.</span>
  ) : (
    // Filter out any null or undefined jobs before mapping
    allAppliedJobs
      .filter((appliedJob) => appliedJob !== null && appliedJob !== undefined)
      .map((appliedJob) => {
        // Make sure each appliedJob has the necessary properties
        if (!appliedJob || !appliedJob.job || !appliedJob.createdAt || !appliedJob.status) {
          return null; // Return null to skip rendering this item if any critical property is missing
        }

        return (
          <TableRow key={appliedJob._id}>
            <TableCell>{appliedJob.createdAt.split("T")[0]}</TableCell>
            <TableCell>{appliedJob.job.title}</TableCell>
            <TableCell>{appliedJob.job.company.name}</TableCell>
            <TableCell className="text-right">
              <Badge
                className={`${
                  appliedJob.status === "rejected"
                    ? "bg-red-400"
                    : appliedJob.status === "pending"
                    ? "bg-gray-400"
                    : "bg-green-400"
                }`}
              >
                {appliedJob.status.toUpperCase()}
              </Badge>
            </TableCell>
          </TableRow>
        );
      })
  )
}
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable